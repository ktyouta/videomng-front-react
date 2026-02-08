import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { getVideoComment } from "../../../api/getVideoComment";
import { HomeVideoCommentThreadItemType } from "../../../types/videodetail/videocomment/HomeVideoCommentThreadItemType";
import { HomeVideoCommentThreadResponseType } from "../../../types/videodetail/videocomment/HomeVideoCommentThreadResponseType";
import { HomeVideoCommentThreadType } from "../../../types/videodetail/videocomment/HomeVideoCommentThreadType";
import { useVideoId } from "../useVideoId";


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
    const { isLoading, error } = getVideoComment({
        videoId,
        nextPageToken,
        select: (res: HomeVideoCommentThreadResponseType) => {
            return res.data;
        },
        onSuccess: (res: HomeVideoCommentThreadType) => {

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
        onError: (res: unknown) => {
            setErrMessage(`コメントの取得に失敗しました。`);
        }
    });
    console.log(`error:`, error);
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