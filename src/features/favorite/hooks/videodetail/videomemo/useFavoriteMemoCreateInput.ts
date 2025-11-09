import { useAtomValue, useSetAtom } from "jotai";
import { useState } from "react";
import useMutationWrapper from "../../../../../hooks/useMutationWrapper";
import ENV from "../../../../../env.json";
import { AddToFavoriteVideoMemoResponseType } from "../../../types/videodetail/videomemo/AddToFavoriteVideoMemoResponseType";
import { errResType, resSchema, resType } from "../../../../../hooks/useMutationWrapperBase";
import { AddToFavoriteVideoMemoReqestType } from "../../../types/videodetail/videomemo/AddToFavoriteVideoMemoReqestType";
import { FavoriteVideoMemoType } from "../../../types/videodetail/videomemo/FavoriteVideoMemoType";
import { toast } from "react-toastify";
import { VIDEO_MNG_PATH } from "../../../../../consts/CommonConst";
import { useFavoriteMemoEndpoint } from "./useFavoriteMemoEndpoint";
import { mediaQuery, useMediaQuery } from "../../../../../hooks/useMediaQuery";
import { useQueryClient } from "react-query";
import { useInvalidateQuery } from "../../../../../hooks/useInvalidateQuery";
import { useVideoId } from "../useVideoId";


export function useFavoriteMemoCreateInput() {

    // メモ入力情報
    const [inputMemo, setInputMemo] = useState(``);
    // 動画ID
    const videoId = useVideoId();
    // メモ再取得用
    const { invalidate } = useInvalidateQuery(useFavoriteMemoEndpoint(videoId));

    /**
     * お気に入り動画メモ登録リクエスト
     */
    const postMutation = useMutationWrapper({
        url: useFavoriteMemoEndpoint(videoId),
        method: "POST",
        // 正常終了後の処理
        afSuccessFn: (res: unknown) => {

            // レスポンスの型チェック
            const resParsed = resSchema().safeParse(res);

            if (!resParsed.success) {
                toast.error(`メモの登録に失敗しました。時間をおいて再度お試しください。`);
                return;
            }

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

    return {
        inputMemo,
        setInputMemo,
        addToMemo,
        clearInputMemo,
    }
}