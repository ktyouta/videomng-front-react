import { useAtomValue, useSetAtom } from "jotai";
import { useState } from "react";
import useMutationWrapper from "../../../../../hooks/useMutationWrapper";
import ENV from "../../../../../env.json";
import { AddToFavoriteVideoMemoResponseType } from "../../../types/videodetail/videomemo/AddToFavoriteVideoMemoResponseType";
import { errResType, resSchema, resType } from "../../../../../hooks/useMutationWrapperBase";
import { AddToFavoriteVideoMemoReqestType } from "../../../types/videodetail/videomemo/AddToFavoriteVideoMemoReqestType";
import { FavoriteVideoMemoType } from "../../../types/videodetail/videomemo/FavoriteVideoMemoType";
import { UpdateToFavoriteVideoMemoReqestType } from "../../../types/videodetail/videomemo/UpdateToFavoriteVideoMemoReqestType";
import useSwitch from "../../../../../hooks/useSwitch";
import { toast } from "react-toastify";
import { VIDEO_MNG_PATH } from "../../../../../consts/CommonConst";
import { useFavoriteMemoIdEndpoint } from "./useFavoriteMemoIdEndpoint";
import { useInvalidateQuery } from "../../../../../hooks/useInvalidateQuery";
import { useFavoriteMemoEndpoint } from "./useFavoriteMemoEndpoint";
import { useVideoId } from "../useVideoId";


type propsType = {
    initMemo: string,
    closeEdit: () => void,
    videoMemoSeq: number
}

export function useFavoriteMemoUpdateInput(props: propsType) {

    // メモ入力情報
    const [inputMemo, setInputMemo] = useState(props.initMemo);
    // 動画ID
    const videoId = useVideoId();
    // メモ再取得用
    const { invalidate } = useInvalidateQuery(useFavoriteMemoEndpoint(videoId));


    /**
     * お気に入り動画メモ更新リクエスト
     */
    const postMutation = useMutationWrapper({
        url: useFavoriteMemoIdEndpoint({
            videoId,
            memoId: props.videoMemoSeq
        }),
        method: "PUT",
        // 正常終了後の処理
        afSuccessFn: (res: unknown) => {

            // レスポンスの型チェック
            const resParsed = resSchema().safeParse(res);

            if (!resParsed.success) {
                toast.error(`メモの更新に失敗しました。時間をおいて再度お試しください。`);
                return;
            }

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

        if (!videoId) {
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