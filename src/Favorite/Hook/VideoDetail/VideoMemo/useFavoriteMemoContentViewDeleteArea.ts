import { toast } from "react-toastify";
import useSwitch from "../../../../Common/Hook/useSwitch";
import useMutationWrapper from "../../../../Common/Hook/useMutationWrapper";
import { useFavoriteMemoIdEndpoint } from "./useFavoriteMemoIdEndpoint";
import { errResType, resType } from "../../../../Common/Hook/useMutationWrapperBase";
import { FavoriteVideoMemoType } from "../../../Type/VideoDetail/VideoMemo/FavoriteVideoMemoType";
import { useFavoriteMemoEndpoint } from "./useFavoriteMemoEndpoint";
import { useInvalidateQuery } from "../../../../Common/Hook/useInvalidateQuery";
import { FavoriteVideoIdContext } from "../../../Component/FavoriteMain";


type propsType = {
    data: FavoriteVideoMemoType,
}

export function useFavoriteMemoContentViewDeleteArea(props: propsType) {

    // 確認モーダルの表示フラグ
    const { flag: isOpenModal, on: openModal, off: closeModal } = useSwitch();
    // お気に入り動画ID
    const favoriteVideoId = FavoriteVideoIdContext.useCtx();
    // メモ再取得用
    const { invalidate } = useInvalidateQuery(useFavoriteMemoEndpoint(favoriteVideoId));


    /**
     * メモ削除リクエスト
     */
    const postMutation = useMutationWrapper({
        url: useFavoriteMemoIdEndpoint({
            videoId: favoriteVideoId,
            memoId: props.data.videoMemoSeq,
        }),
        method: "DELETE",
        // 正常終了後の処理
        afSuccessFn: (res: resType<FavoriteVideoMemoType>) => {

            // メモを再取得
            invalidate();
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {
            closeModal();
            toast.error(`メモの削除に失敗しました。`);
        },
    });

    /**
     * メモを削除する
     * @returns 
     */
    function deleteMemo() {

        if (!favoriteVideoId) {
            toast.error(`メモを削除できません。`);
            return;
        }

        // 削除確認用モーダルを展開
        openModal();
    }

    /**
     * メモ削除実行
     */
    function executeDelete() {

        // リクエスト送信
        postMutation.mutate();
    }
    return {
        isOpenModal,
        closeModal,
        deleteMemo,
        executeDelete
    }
}