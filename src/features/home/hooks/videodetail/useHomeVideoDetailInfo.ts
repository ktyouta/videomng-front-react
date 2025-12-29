import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IsLoginContext } from "../../../../app/components/QueryApp";
import { PREV_PATH_KEY, VIDEO_MNG_PATH } from "../../../../consts/CommonConst";
import { ROUTER_PATH } from "../../../../consts/RouterPath";
import ENV from '../../../../env.json';
import { mediaQuery, useMediaQuery } from "../../../../hooks/useMediaQuery";
import useMutationWrapper from "../../../../hooks/useMutationWrapper";
import { errResType, resSchema } from "../../../../hooks/useMutationWrapperBase";
import { useVideoPlayUrl } from "../../../../hooks/useVideoPlayUrl";
import { getPrevPath } from "../../../../utils/CommonFunction";
import { AddToFavoriteRequestType } from "../../types/videodetail/AddToFavoriteRequestType";
import { useVideoId } from "./useVideoId";


export function useHomeVideoDetailInfo() {

    // ルーティング用
    const navigate = useNavigate();
    // ログインフラグ
    const isLogin = IsLoginContext.useCtx();
    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);
    // 動画ID
    const videoId = useVideoId();
    // URL情報
    const location = useLocation();
    // クエリパラメータ(遷移元情報)
    const queryParam = location.search;
    // パス
    const pathName = location.pathname;
    // 前画面のパスを取得
    const prev = getPrevPath(PREV_PATH_KEY, ROUTER_PATH.HOME.ROOT);

    /**
     * お気に入り登録リクエスト
     */
    const postMutation = useMutationWrapper({
        url: `${VIDEO_MNG_PATH}${ENV.FAVORITE_VIDEO}`,
        method: "POST",
        // 正常終了後の処理
        afSuccessFn: (res: unknown) => {

            // レスポンスの型チェック
            const resParsed = resSchema().safeParse(res);

            if (!resParsed.success) {
                toast.error(`お気に入り登録に失敗しました。時間をおいて再度お試しください。`);
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

            const message = res.response.data.message;
            if (message) {
                toast.error(message);
            }
        },
    });

    /**
     * 動画をお気に入りに登録する
     * @param videoId 
     * @returns 
     */
    function addToFavorite() {

        const body: AddToFavoriteRequestType = {
            videoId
        }

        // リクエスト送信
        postMutation.mutate(body);
    }

    /**
     * 動画を再生
     */
    function play() {

        if (!videoId) {
            toast.error(`動画を再生できません。`);
            return;
        }

        window.open(useVideoPlayUrl(videoId), `_blank`);
    }

    /**
     * ログイン画面に遷移
     */
    function moveLogin() {

        let path = ``;

        if (videoId) {
            path = `?${PREV_PATH_KEY}=${pathName}${queryParam}`;
        }

        navigate(`${ROUTER_PATH.LOGIN}${path}`);
    }

    return {
        addToFavorite,
        play,
        isLogin,
        moveLogin,
        isMobile,
    }
}