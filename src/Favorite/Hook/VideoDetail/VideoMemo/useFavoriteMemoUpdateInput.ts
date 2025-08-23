import { useAtomValue, useSetAtom } from "jotai";
import { favoriteVideoMemoListAtom } from "../../../Atom/FavoriteAtom";
import { useState } from "react";
import useMutationWrapper from "../../../../Common/Hook/useMutationWrapper";
import ENV from "../../../../env.json";
import { AddToFavoriteVideoMemoResponseType } from "../../../Type/VideoDetail/VideoMemo/AddToFavoriteVideoMemoResponseType";
import { errResType, resType } from "../../../../Common/Hook/useMutationWrapperBase";
import { AddToFavoriteVideoMemoReqestType } from "../../../Type/VideoDetail/VideoMemo/AddToFavoriteVideoMemoReqestType";
import { FavoriteVideoMemoType } from "../../../Type/VideoDetail/VideoMemo/FavoriteVideoMemoType";
import { UpdateToFavoriteVideoMemoReqestType } from "../../../Type/VideoDetail/VideoMemo/UpdateToFavoriteVideoMemoReqestType";
import useSwitch from "../../../../Common/Hook/useSwitch";
import { FavoriteVideoIdContext } from "../../../Component/Favorite";
import { toast } from "react-toastify";
import { VIDEO_MNG_PATH } from "../../../../Common/Const/CommonConst";
import { useFavoriteMemoIdEndpoint } from "./useFavoriteMemoIdEndpoint";


type propsType = {
    inputMemo: string,
    closeEdit: () => void,
    videoMemoSeq: number
}

export function useFavoriteMemoUpdateInput(props: propsType) {

    // メモ入力情報
    const [inputMemo, setInputMemo] = useState(props.inputMemo);
    // メモ情報
    const setVideoListItemAtom = useSetAtom(favoriteVideoMemoListAtom);
    // お気に入り動画ID
    const favoriteVideoId = FavoriteVideoIdContext.useCtx();


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
            setVideoListItemAtom((e) => {
                if (e) {
                    const resMemo = res.data;
                    const videoId = resMemo.videoId;
                    const userId = resMemo.userId;
                    const memoSeq = resMemo.videoMemoSeq;
                    const memo = resMemo.videoMemo;

                    // 対象のメモを更新
                    const updateMemo = e.find((e1) => {
                        return e1.userId === userId &&
                            e1.videoId === videoId &&
                            e1.videoMemoSeq === memoSeq;
                    });

                    if (updateMemo) {
                        updateMemo.videoMemo = memo;
                        updateMemo.updateDate = resMemo.updateDate;
                    }
                }
                return e;
            });

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