import { useAtomValue, useSetAtom } from "jotai";
import { useState } from "react";
import useMutationWrapper from "../../../../Common/Hook/useMutationWrapper";
import ENV from "../../../../env.json";
import { AddToFavoriteVideoMemoResponseType } from "../../../Type/VideoDetail/VideoMemo/AddToFavoriteVideoMemoResponseType";
import { errResType, resType } from "../../../../Common/Hook/useMutationWrapperBase";
import { AddToFavoriteVideoMemoReqestType } from "../../../Type/VideoDetail/VideoMemo/AddToFavoriteVideoMemoReqestType";
import { FavoriteVideoMemoType } from "../../../Type/VideoDetail/VideoMemo/FavoriteVideoMemoType";
import { UpdateToFavoriteVideoMemoReqestType } from "../../../Type/VideoDetail/VideoMemo/UpdateToFavoriteVideoMemoReqestType";
import useSwitch from "../../../../Common/Hook/useSwitch";
import { toast } from "react-toastify";
import { VIDEO_MNG_PATH } from "../../../../Common/Const/CommonConst";
import { useFavoriteMemoIdEndpoint } from "./useFavoriteMemoIdEndpoint";
import { useInvalidateQuery } from "../../../../Common/Hook/useInvalidateQuery";
import { useFavoriteMemoEndpoint } from "./useFavoriteMemoEndpoint";
import { FavoriteVideoIdContext } from "../../../Component/FavoriteMain";


type propsType = {
    initMemo: string,
    closeEdit: () => void,
    videoMemoSeq: number
}

export function useFavoriteMemoUpdateInput(props: propsType) {

    // メモ入力情報
    const [inputMemo, setInputMemo] = useState(props.initMemo);
    // お気に入り動画ID
    const favoriteVideoId = FavoriteVideoIdContext.useCtx();
    // メモ再取得用
    const { invalidate } = useInvalidateQuery(useFavoriteMemoEndpoint(favoriteVideoId));


    /**
     * お気に入り動画メモ更新リクエスト
     */
    const postMutation = useMutationWrapper({
        url: useFavoriteMemoIdEndpoint({
            videoId: favoriteVideoId,
            memoId: props.videoMemoSeq
        }),
        method: "PUT",
        // 正常終了後の処理
        afSuccessFn: (res: resType<FavoriteVideoMemoType>) => {

            // メモを再取得
            invalidate()
            props.closeEdit();
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {
            toast.error(`メモの更新に失敗しました。`);
        },
    });

    /**
     * メモを更新する
     * @param videoId 
     */
    function updateMemo() {

        if (!inputMemo) {
            toast.warn(`メモが入力されていません。`);
            return;
        }

        if (!favoriteVideoId) {
            toast.error(`メモを更新できません。`);
            return;
        }

        const body: UpdateToFavoriteVideoMemoReqestType = {
            memo: inputMemo
        }

        // リクエスト送信
        postMutation.mutate(body);
    }

    /**
     * エンターキー押下時イベント
     * @param event 
     */
    function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            updateMemo();
        }
    };

    return {
        inputMemo,
        setInputMemo,
        updateMemo,
        handleKeyPress,
    }
}