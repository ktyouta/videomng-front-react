import { useDraggable } from "@dnd-kit/core";
import { CSSProperties } from "react";
import { toast } from "react-toastify";
import { ROUTER_PATH } from "../../../../../consts/RouterPath";
import { useAppNavigation } from "../../../../../hooks/useAppNavigation";
import { useInvalidateQuery } from "../../../../../hooks/useInvalidateQuery";
import useMutationWrapper from "../../../../../hooks/useMutationWrapper";
import { errResType, resSchema } from "../../../../../hooks/useMutationWrapperBase";
import useSwitch from "../../../../../hooks/useSwitch";
import { favoriteVideoKeys } from "../../../api/queryKey";
import { FavoriteVideoListMergedType } from "../../../types/FavoriteVideoListMergedType";
import { favoriteVideoFolderId } from "../../../utils/endpoint";
import { useFolderMasterList } from "../../useFolderMasterList";
import { useFavoriteVideoFolderSearchConditionValue } from "../useFavoriteVideoFolderSearchConditionValue";
import { useFolderId } from "../useFolderId";


type propsType = {
    data: FavoriteVideoListMergedType,
}

export function useFavoriteVideoFolderVideoContent(props: propsType) {

    // ルーティング用
    const { appNavigate } = useAppNavigation();
    // モーダルの表示フラグ
    const { flag: isOpenModal, on: openModal, off: closeModal } = useSwitch();
    // フォルダID
    const folderId = useFolderId();
    // 検索条件
    const searchConditionObj = useFavoriteVideoFolderSearchConditionValue();
    // 動画再取得用
    const { invalidate: invalidataPublic } = useInvalidateQuery(favoriteVideoKeys.folderVideo({
        folderId,
        searchConditionObj
    }));
    // フォルダリスト
    const { data: folderList } = useFolderMasterList();
    // ドラッグ用
    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id: props.data.videoId,
    });
    // ドラッグ時スタイル
    const draggingStyle: CSSProperties = {
        transform: transform ? `translate(${transform.x}px, ${transform.y}px) scale(0.99)` : undefined,
        opacity: isDragging ? 0.8 : 1,
    };

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

            const folderName = folderList?.find((e) => {
                return e.value === folderId;
            })?.label ?? ``;

            toast.success(`動画を${folderName}フォルダから削除しました。`);
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
        appNavigate(`${ROUTER_PATH.FAVORITE.ROOT}${ROUTER_PATH.FAVORITE.DETAIL}/${id}`);
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

        appNavigate(`${ROUTER_PATH.FAVORITE.ROOT}${ROUTER_PATH.FAVORITE.CHANNEL}/${id}`);
    }

    return {
        clickVideo,
        deleteVideo,
        isOpenModal,
        openModal,
        closeModal,
        clickChannel,
        setNodeRef,
        draggingStyle,
        attributes,
        listeners,
    }
}