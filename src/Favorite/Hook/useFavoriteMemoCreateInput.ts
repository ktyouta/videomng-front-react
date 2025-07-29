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
import { toast } from "react-toastify";
import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import { useFavoriteMemoEndpoint } from "./useFavoriteMemoEndpoint";
import { mediaQuery, useMediaQuery } from "../../Common/Hook/useMediaQuery";


export function useFavoriteMemoCreateInput() {

    // メモ入力情報
    const [inputMemo, setInputMemo] = useState(``);
    // メモ情報
    const setVideoListItemAtom = useSetAtom(favoriteVideoMemoListAtom);
    // お気に入り動画ID
    const favoriteVideoId = FavoriteVideoIdContext.useCtx();
    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);


    /**
     * お気に入り動画メモ登録リクエスト
     */
    const postMutation = useMutationWrapper({
        url: useFavoriteMemoEndpoint(favoriteVideoId),
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
            toast.error(`メモの登録に失敗しました。`);
        },
    });

    /**
     * メモを登録する
     */
    function addToMemo() {

        if (!inputMemo) {
            toast.warn(`メモが入力されていません。`);
            return;
        }

        const body: AddToFavoriteVideoMemoReqestType = {
            memo: inputMemo
        }

        // リクエスト送信
        postMutation.mutate(body);
    }

    /**
     * 入力中のメモをクリアする
     */
    function clearInputMemo() {
        setInputMemo(``);
    }

    return {
        inputMemo,
        setInputMemo,
        addToMemo,
        clearInputMemo,
        isMobile,
    }
}