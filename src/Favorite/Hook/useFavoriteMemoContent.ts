import { useAtomValue, useSetAtom } from "jotai";
import { favoriteVideoMemoListAtom } from "../Atom/FavoriteAtom";
import { useState } from "react";
import useMutationWrapper from "../../Common/Hook/useMutationWrapper";
import ENV from "../../env.json";
import { errResType, resType } from "../../Common/Hook/useMutationWrapperBase";
import { DeleteToFavoriteVideoMemoReqestType } from "../Type/DeleteToFavoriteVideoMemoReqestType";
import { FavoriteVideoMemoType } from "../Type/FavoriteVideoMemoType";
import useSwitch from "../../Common/Hook/useSwitch";
import { FavoriteVideoIdContext } from "../Component/Favorite";
import { toast } from "react-toastify";
import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import { useFavoriteMemoIdEndpoint } from "./useFavoriteMemoIdEndpoint";


type propsType = {
    favoriteVideoMemo: FavoriteVideoMemoType,
}

export function useFavoriteMemoContent(props: propsType) {

    // メモ情報
    const setVideoListItemAtom = useSetAtom(favoriteVideoMemoListAtom);
    // メモ編集エリアの切り替えフラグ
    const { flag: isOpenEdit, on: openEdit, off: closeEdit } = useSwitch();
    // お気に入り動画ID
    const favoriteVideoId = FavoriteVideoIdContext.useCtx();
    // 確認モーダルの表示フラグ
    const { flag: isOpenModal, on: openModal, off: closeModal } = useSwitch();


    /**
     * メモ削除リクエスト
     */
    const postMutation = useMutationWrapper({
        url: useFavoriteMemoIdEndpoint({
            videoId: favoriteVideoId,
            memoId: props.favoriteVideoMemo.videoMemoSeq
        }),
        method: "DELETE",
        // 正常終了後の処理
        afSuccessFn: (res: resType<FavoriteVideoMemoType>) => {
            setVideoListItemAtom((e) => {
                if (e) {
                    e = e.filter((e1) => {
                        return e1.videoMemoSeq !== res.data.videoMemoSeq;
                    });
                }
                return e;
            });
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {
            closeModal();
            toast.error(`メモの削除に失敗しました。`);
        },
    });


    /**
     * メモを削除する
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
        deleteMemo,
        isOpenEdit,
        openEdit,
        closeEdit,
        isOpenModal,
        closeModal,
        executeDelete,
    }
}