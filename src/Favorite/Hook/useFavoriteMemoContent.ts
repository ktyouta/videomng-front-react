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



export function useFavoriteMemoContent() {

    // メモ情報
    const setVideoListItemAtom = useSetAtom(favoriteVideoMemoListAtom);
    // メモ編集エリアの切り替えフラグ
    const { flag: isOpenEdit, on: openEdit, off: closeEdit } = useSwitch();
    // お気に入り動画ID
    const favoriteVideoId = FavoriteVideoIdContext.useCtx();


    /**
     * メモ削除リクエスト
     */
    const postMutation = useMutationWrapper({
        url: `${ENV.PROTOCOL}${ENV.DOMAIN}${ENV.PORT}${ENV.FAVORITE_VIDEO_MEMO}`,
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
            alert(`メモの削除に失敗しました。`);
        },
    });


    /**
     * メモを削除する
     */
    function deleteMemo(videoMemoSeq: number) {

        if (!window.confirm(`メモを削除しますか？`)) {
            return;
        }

        if (!favoriteVideoId) {
            alert(`メモを削除できませんでした。`);
            return;
        }

        const body: DeleteToFavoriteVideoMemoReqestType = {
            videoId: favoriteVideoId,
            videoMemoSeq
        }

        // リクエスト送信
        postMutation.mutate(body);
    }


    return {
        deleteMemo,
        isOpenEdit,
        openEdit,
        closeEdit,
    }
}