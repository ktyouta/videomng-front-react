import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { getVideoComment } from "../../../../../api/getVideoComment";
import { VideoCommentThreadItemType } from "../../../../types/videochannel/videodetail/comment/VideoCommentThreadItemType";
import { VideoCommentThreadResponseType } from "../../../../types/videochannel/videodetail/comment/VideoCommentThreadResponseType";
import { VideoCommentThreadType } from "../../../../types/videochannel/videodetail/comment/VideoCommentThreadType";
import { useVideoId } from "../useVideoId";


export function useCommentList() {

    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // 動画ID
    const videoId = useVideoId();
    // 次コメント取得トークン
    const nextPageTokenRef = useRef(``);
    // 次コメント取得トークン
    const [nextPageToken, setNextPageToken] = useState(``);
    // 画面表示用コメント
    const [displayCommentList, setDisplayCommentList] = useState<VideoCommentThreadItemType[]>();
    // 無限スクロール用
    const { ref, inView } = useInView({
        threshold: 0.2,
    });

    // コメント情報を取得
    const { isLoading } = getVideoComment({
        videoId,
        nextPageToken,
        select: (res: VideoCommentThreadResponseType) => {
            return res.data;
        },
        onSuccess: (res: VideoCommentThreadType) => {

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
        onError: function (res: unknown): void {
            throw new Error("Function not implemented.");
        }
    });

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