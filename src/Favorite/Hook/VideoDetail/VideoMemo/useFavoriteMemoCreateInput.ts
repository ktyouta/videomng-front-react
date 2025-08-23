import { useAtomValue, useSetAtom } from "jotai";
import { useState } from "react";
import useMutationWrapper from "../../../../Common/Hook/useMutationWrapper";
import ENV from "../../../../env.json";
import { AddToFavoriteVideoMemoResponseType } from "../../../Type/VideoDetail/VideoMemo/AddToFavoriteVideoMemoResponseType";
import { errResType, resType } from "../../../../Common/Hook/useMutationWrapperBase";
import { AddToFavoriteVideoMemoReqestType } from "../../../Type/VideoDetail/VideoMemo/AddToFavoriteVideoMemoReqestType";
import { FavoriteVideoMemoType } from "../../../Type/VideoDetail/VideoMemo/FavoriteVideoMemoType";
import { FavoriteVideoIdContext } from "../../../Component/Favorite";
import { toast } from "react-toastify";
import { VIDEO_MNG_PATH } from "../../../../Common/Const/CommonConst";
import { useFavoriteMemoEndpoint } from "./useFavoriteMemoEndpoint";
import { mediaQuery, useMediaQuery } from "../../../../Common/Hook/useMediaQuery";
import { useQueryClient } from "react-query";
import { useInvalidateQuery } from "../../../../Common/Hook/useInvalidateQuery";


export function useFavoriteMemoCreateInput() {

    // メモ入力情報
    const [inputMemo, setInputMemo] = useState(``);
    // お気に入り動画ID
    const favoriteVideoId = FavoriteVideoIdContext.useCtx();
    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);
    // メモ再取得用
    const { invalidate } = useInvalidateQuery(useFavoriteMemoEndpoint(favoriteVideoId));

    /**
     * お気に入り動画メモ登録リクエスト
     */
    const postMutation = useMutationWrapper({
        url: useFavoriteMemoEndpoint(favoriteVideoId),
        method: "POST",
        // 正常終了後の処理
        afSuccessFn: (res: resType<FavoriteVideoMemoType>) => {

            // メモを再取得
            invalidate();
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

        clearInputMemo();
    }

    /**
     * 入力中のメモをクリアする
     */
    function clearInputMemo() {
        setInputMemo(``);
    }

    /**
     * エンターキー押下時イベント
     * @param event 
     */
    function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            addToMemo();
        }
    };

    return {
        inputMemo,
        setInputMemo,
        addToMemo,
        clearInputMemo,
        isMobile,
        handleKeyPress,
    }
}