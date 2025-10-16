import { useAtom, useAtomValue } from "jotai";
import { useEffect, useRef, useState } from "react";
import useQueryWrapper from "../../../../Common/Hook/useQueryWrapper";
import { VIDEO_MNG_PATH } from "../../../../Common/Const/CommonConst";
import ENV from "../../../../env.json";
import { HomeVideoCommentThreadResponseType } from "../../../Type/VideoDetail/VideoComment/HomeVideoCommentThreadResponseType";
import { useHomeCommentEndpoint } from "./useHomeCommentEndpoint";
import { HomeVideoCommentThreadItemType } from "../../../Type/VideoDetail/VideoComment/HomeVideoCommentThreadItemType";
import { useVideoId } from "../useVideoId";
import { useInView } from "react-intersection-observer";
import { HomeVideoCommentThreadType } from "../../../Type/VideoDetail/VideoComment/HomeVideoCommentThreadType";


export function useHomeCommentList() {

    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // 動画ID
    const videoId = useVideoId();
    // 次コメント取得トークン
    const nextPageTokenRef = useRef(``);
    // 次コメント取得トークン
    const [nextPageToken, setNextPageToken] = useState(``);
    // 画面表示用コメント
    const [displayCommentList, setDisplayCommentList] = useState<HomeVideoCommentThreadItemType[]>();
    // 無限スクロール用
    const { ref, inView } = useInView({
        threshold: 0.2,
    });


    // コメント情報を取得
    const { isLoading } = useQueryWrapper<HomeVideoCommentThreadResponseType, HomeVideoCommentThreadType>(
        {
            url: useHomeCommentEndpoint({
                videoId,
                nextPageToken,
            }),
            select: (res: HomeVideoCommentThreadResponseType) => {
                return res.data;
            },
            afSuccessFn: (res: HomeVideoCommentThreadType) => {

                setDisplayCommentList((e) => {

                    if (!res.items || res.items.length === 0) {
                        return e;
                    }

                    if (!nextPageToken) {
                        return res.items;
                    }

                    if (!e) {
                        return e;
                    }

                    return [...e, ...res.items];
                });

                nextPageTokenRef.current = res.nextPageToken;
            },
            afErrorFn: (res) => {
                setErrMessage(`コメントの取得に失敗しました。`);
            }
        }
    );

    /**
     * 画面下までスクロールしたら次データを取得する
     */
    useEffect(() => {

        if (!inView) {
            return;
        }

        if (isLoading) {
            return;
        }

        if (!nextPageTokenRef.current) {
            return;
        }

        setNextPageToken(nextPageTokenRef.current);
    }, [inView]);

    return {
        isLoading,
        errMessage,
        displayCommentList,
        ref,
        nextPageToken: nextPageTokenRef.current,
    }
}