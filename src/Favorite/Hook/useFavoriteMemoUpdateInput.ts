import { useAtomValue, useSetAtom } from "jotai";
import { favoriteVideoMemoListAtom } from "../Atom/FavoriteAtom";
import { useState } from "react";
import useMutationWrapper from "../../Common/Hook/useMutationWrapper";
import ENV from "../../env.json";
import { AddToFavoriteVideoMemoResponseType } from "../Type/AddToFavoriteVideoMemoResponseType";
import { errResType, resType } from "../../Common/Hook/useMutationWrapperBase";
import { AddToFavoriteVideoMemoReqestType } from "../Type/AddToFavoriteVideoMemoReqestType";
import { FavoriteVideoMemoType } from "../Type/FavoriteVideoMemoType";
import { UpdateToFavoriteVideoMemoReqestType } from "../Type/UpdateToFavoriteVideoMemoReqestType";
import useSwitch from "../../Common/Hook/useSwitch";


type propsType = {
    inputMemo: string,
    closeEdit: () => void,
}

export function useFavoriteMemoUpdateInput(props: propsType) {

    // メモ入力情報
    const [inputMemo, setInputMemo] = useState(props.inputMemo);
    // メモ情報
    const setVideoListItemAtom = useSetAtom(favoriteVideoMemoListAtom);


    /**
     * お気に入り動画メモ更新リクエスト
     */
    const postMutation = useMutationWrapper({
        url: `${ENV.PROTOCOL}${ENV.DOMAIN}${ENV.PORT}${ENV.FAVORITE_VIDEO_MEMO}`,
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
            alert(`メモの更新に失敗しました。`);
        },
    });

    /**
     * メモを更新する
     * @param videoId 
     */
    function updateMemo(videoId: string, videoMemoSeq: number) {

        if (!window.confirm(`メモを更新しますか？`)) {
            return;
        }

        if (!inputMemo) {
            alert(`メモが入力されていません。`);
            return;
        }

        if (!videoId) {
            alert(`メモを更新できませんでした。`);
            return;
        }

        const body: UpdateToFavoriteVideoMemoReqestType = {
            videoId,
            videoMemoSeq,
            memo: inputMemo
        }

        // リクエスト送信
        postMutation.mutate(body);
    }

    return {
        inputMemo,
        setInputMemo,
        updateMemo,
    }
}