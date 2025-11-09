import { toast } from "react-toastify";
import useSwitch from "../../../../../hooks/useSwitch";
import useMutationWrapper from "../../../../../hooks/useMutationWrapper";
import { useFavoriteMemoIdEndpoint } from "./useFavoriteMemoIdEndpoint";
import { errResType, resSchema, resType } from "../../../../../hooks/useMutationWrapperBase";
import { FavoriteVideoMemoType } from "../../../types/videodetail/videomemo/FavoriteVideoMemoType";
import { useFavoriteMemoEndpoint } from "./useFavoriteMemoEndpoint";
import { useInvalidateQuery } from "../../../../../hooks/useInvalidateQuery";
import { useVideoId } from "../useVideoId";


type propsType = {
    data: FavoriteVideoMemoType,
}

export function useFavoriteMemoContentViewDeleteArea(props: propsType) {

    // 確認モーダルの表示フラグ
    const { flag: isOpenModal, on: openModal, off: closeModal } = useSwitch();
    // 動画ID
    const videoId = useVideoId();
    // メモ再取得用
    const { invalidate } = useInvalidateQuery(useFavoriteMemoEndpoint(videoId));


    /**
     * メモ削除リクエスト
     */
    const postMutation = useMutationWrapper({
        url: useFavoriteMemoIdEndpoint({
            videoId,
            memoId: props.data.videoMemoSeq,
        }),
        method: "DELETE",
        // 正常終了後の処理
        afSuccessFn: (res: unknown) => {

            // レスポンスの型チェック
            const resParsed = resSchema().safeParse(res);

            if (!resParsed.success) {
                toast.error(`メモの削除に失敗しました。時間をおいて再度お試しください。`);
                return;
            }

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

        if (!videoId) {
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