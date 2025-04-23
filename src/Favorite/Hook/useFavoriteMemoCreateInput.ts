import { useAtomValue, useSetAtom } from "jotai";
import { favoriteVideoMemoListAtom } from "../Atom/FavoriteAtom";
import { useState } from "react";
import useMutationWrapper from "../../Common/Hook/useMutationWrapper";
import ENV from "../../env.json";
import { AddToFavoriteVideoMemoResponseType } from "../Type/AddToFavoriteVideoMemoResponseType";
import { errResType, resType } from "../../Common/Hook/useMutationWrapperBase";
import { AddToFavoriteVideoMemoReqestType } from "../Type/AddToFavoriteVideoMemoReqestType";
import { FavoriteVideoMemoType } from "../Type/FavoriteVideoMemoType";
import { FavoriteVideoIdContext } from "../Component/Favorite";


export function useFavoriteMemoCreateInput() {

    // メモ入力情報
    const [inputMemo, setInputMemo] = useState(``);
    // メモ情報
    const setVideoListItemAtom = useSetAtom(favoriteVideoMemoListAtom);
    // お気に入り動画ID
    const favoriteVideoId = FavoriteVideoIdContext.useCtx();


    /**
     * お気に入り動画メモ登録リクエスト
     */
    const postMutation = useMutationWrapper({
        url: `${ENV.PROTOCOL}${ENV.DOMAIN}${ENV.PORT}${ENV.FAVORITE_VIDEO_MEMO}`,
        method: "POST",
        // 正常終了後の処理
        afSuccessFn: (res: resType<FavoriteVideoMemoType>) => {
            setVideoListItemAtom((e) => {
                if (e) {
                    e = [...e, res.data];
                }
                setInputMemo(``);
                return e;
            });
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {
            alert(`メモの登録に失敗しました。`);
        },
    });

    /**
     * メモを登録する
     */
    function addToMemo() {

        if (!inputMemo) {
            alert(`メモが入力されていません。`);
            return;
        }

        if (!favoriteVideoId) {
            alert(`メモを登録できません。`);
            return;
        }

        const body: AddToFavoriteVideoMemoReqestType = {
            videoId: favoriteVideoId,
            memo: inputMemo
        }

        // リクエスト送信
        postMutation.mutate(body);
    }

    return {
        inputMemo,
        setInputMemo,
        addToMemo
    }
}