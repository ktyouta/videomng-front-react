import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PREV_PATH_KEY, VIDEO_MNG_PATH } from "../../../../consts/CommonConst";
import { ROUTER_PATH } from "../../../../consts/RouterPath";
import ENV from '../../../../env.json';
import useMutationWrapper from "../../../../hooks/useMutationWrapper";
import { errResType, resSchema } from "../../../../hooks/useMutationWrapperBase";
import useSwitch from "../../../../hooks/useSwitch";
import { getPrevPath } from "../../../../utils/CommonFunction";
import { playVideo } from "../../../../utils/playVideo";
import { useVideoId } from "./useVideoId";


export function useFavoriteVideoDetailInfo() {

    // ルーティング用
    const navigate = useNavigate();
    // 確認モーダルの表示フラグ
    const { flag: isOpenModal, on: openModal, off: closeModal } = useSwitch();
    // 動画ID
    const videoId = useVideoId();
    // 前画面のパスを取得
    const prev = getPrevPath(PREV_PATH_KEY, ROUTER_PATH.FAVORITE.ROOT);

    /**
     * お気に入り動画削除リクエスト
     */
    const postMutation = useMutationWrapper({
        url: `${VIDEO_MNG_PATH}${ENV.FAVORITE_VIDEO}/${videoId}`,
        method: "DELETE",
        // 正常終了後の処理
        afSuccessFn: (res: unknown) => {

            // レスポンスの型チェック
            const resParsed = resSchema().safeParse(res);

            if (!resParsed.success) {
                toast.error(`動画の削除に失敗しました。時間をおいて再度お試しください。`);
                closeModal();
                return;
            }

            const message = resParsed.data.message;

            if (message) {
                toast.success(message);
            }

            navigate(prev);
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {
            closeModal();
            toast.error(`動画の削除に失敗しました。`);
        },
    });

    /**
     * お気に入り動画削除ボタン押下
     */
    function clickDeleteFavoriteVide() {

        // 削除確認用モーダルを展開
        openModal();
    }


    /**
     * 動画を再生
     */
    function play() {

        if (!videoId) {
            toast.error(`動画を再生できません。`);
            return;
        }

        playVideo(videoId);
    }

    /**
     * お気に入り動画削除実行
     */
    function executeDelete() {

        // リクエスト送信
        postMutation.mutate();
    }

    return {
        clickDeleteFavoriteVide,
        play,
        isOpenModal,
        closeModal,
        executeDelete,
    }
}