import { useLocation, useNavigate } from "react-router-dom";
import { ROUTER_PATH } from "../../../../../consts/RouterPath";
import { toast } from "react-toastify";
import { useCreateFavoriteVideoListQuery } from "../../useCreateFavoriteVideoListQuery";
import { PREV_PATH_KEY } from "../../../../../consts/CommonConst";
import { useDraggable } from "@dnd-kit/core";
import { FavoriteVideoListMergedType } from "../../../types/videolist/FavoriteVideoListMergedType";
import { CSSProperties, useRef } from "react";
import { useCreateFavoriteVideoFolderVideoListQuery } from "../useCreateFavoriteVideoFolderVideoListQuery";
import { errResType, resSchema } from "../../../../../hooks/useMutationWrapperBase";
import useMutationWrapper from "../../../../../hooks/useMutationWrapper";
import useSwitch from "../../../../../hooks/useSwitch";
import { favoriteVideoFolderId } from "../../../utils/endpoint";
import { useFolderId } from "../useFolderId";
import { useInvalidateQuery } from "../../../../../hooks/useInvalidateQuery";
import { useFavoriteVideoListEndpoint } from "./useFavoriteVideoListEndpoint";


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
    const { invalidate: invalidataPublic } = useInvalidateQuery(useFavoriteVideoListEndpoint(folderId));

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

    return {
        clickVideo,
        deleteVideo,
        isOpenModal,
        openModal,
        closeModal,
    }
}