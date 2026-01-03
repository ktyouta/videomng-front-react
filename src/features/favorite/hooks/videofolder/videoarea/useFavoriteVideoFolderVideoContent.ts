import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PREV_PATH_KEY } from "../../../../../consts/CommonConst";
import { ROUTER_PATH } from "../../../../../consts/RouterPath";
import { useInvalidateQuery } from "../../../../../hooks/useInvalidateQuery";
import useMutationWrapper from "../../../../../hooks/useMutationWrapper";
import { errResType, resSchema } from "../../../../../hooks/useMutationWrapperBase";
import useSwitch from "../../../../../hooks/useSwitch";
import { FavoriteVideoListMergedType } from "../../../types/videolist/FavoriteVideoListMergedType";
import { favoriteVideoFolderId } from "../../../utils/endpoint";
import { useCreateFavoriteVideoFolderVideoListQuery } from "../useCreateFavoriteVideoFolderVideoListQuery";
import { useFolderId } from "../useFolderId";
import { useFavoriteVideoFolderVideoListEndpoint } from "./useFavoriteVideoFolderVideoListEndpoint";


type propsType = {
    data: FavoriteVideoListMergedType,
}

export function useFavoriteVideoFolderVideoContent(props: propsType) {

    //ルーティング用
    const navigate = useNavigate();
    // クエリ作成用
    const { query } = useCreateFavoriteVideoFolderVideoListQuery();
    // パス
    const pathName = location.pathname;
    // モーダルの表示フラグ
    const { flag: isOpenModal, on: openModal, off: closeModal } = useSwitch();
    // フォルダID
    const folderId = useFolderId();
    // 動画再取得用
    const { invalidate: invalidataPublic } = useInvalidateQuery(useFavoriteVideoFolderVideoListEndpoint(folderId));

    /**
     * 動画をフォルダから削除
     */
    const postMutation = useMutationWrapper({
        url: favoriteVideoFolderId({
            videoId: props.data.id,
            folderId
        }),
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

            toast.success("動画をフォルダから削除しました。");
            closeModal();
            invalidataPublic();
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {

            const errMessage = res.response.data.message;

            if (errMessage) {
                toast.error(errMessage);
            }
        },
    });

    /**
     * 動画クリック処理
     * @param id 
     */
    function clickVideo(id: string) {
        navigate(`${ROUTER_PATH.FAVORITE.ROOT}${ROUTER_PATH.FAVORITE.DETAIL}/${id}?${PREV_PATH_KEY}=${pathName}${query}`);
    };

    /**
     * 動画をフォルダから削除
     */
    function deleteVideo() {
        postMutation.mutate();
    }

    /**
     * チャンネル名のクリックイベント
     */
    function clickChannel(id: string) {

        if (!id) {
            toast.error(`チャンネル情報を取得できませんでした。`);
            return;
        }

        navigate(`${ROUTER_PATH.FAVORITE.ROOT}${ROUTER_PATH.FAVORITE.CHANNEL}/${id}?${PREV_PATH_KEY}=${pathName}${query}`);
    }

    return {
        clickVideo,
        deleteVideo,
        isOpenModal,
        openModal,
        closeModal,
        clickChannel,
    }
}