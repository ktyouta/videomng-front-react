import { useEffect, useRef, useState } from "react";
import useQueryWrapper from "../../../../../hooks/useQueryWrapper";
import { useFavoriteCommentEndpoint } from "./useFavoriteCommentEndpoint";
import { FavoriteVideoCommentThreadResponseType } from "../../../types/videodetail/videocomment/FavoriteVideoCommentThreadResponseType";
import { FavoriteVideoCommentThreadItemType } from "../../../types/videodetail/videocomment/FavoriteVideoCommentThreadItemType";
import { useVideoId } from "../useVideoId";
import { FavoriteVideoCommentThreadType } from "../../../types/videodetail/videocomment/FavoriteVideoCommentThreadType";
import { useInView } from "react-intersection-observer";


export function useFavoriteCommentList() {

    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // 動画ID
    const videoId = useVideoId();
    // 次コメント取得トークン
    const nextPageTokenRef = useRef(``);
    // 次コメント取得トークン
    const [nextPageToken, setNextPageToken] = useState(``);
    // 画面表示用コメント
    const [displayCommentList, setDisplayCommentList] = useState<FavoriteVideoCommentThreadItemType[]>();
    // 無限スクロール用
    const { ref, inView } = useInView({
        threshold: 0.1,
    });


    // コメント情報を取得
    const { isLoading } = useQueryWrapper<FavoriteVideoCommentThreadResponseType, FavoriteVideoCommentThreadType>(
        {
            url: useFavoriteCommentEndpoint({
                videoId,
                nextPageToken,
            }),
            select: (res: FavoriteVideoCommentThreadResponseType) => {
                return res.data;
            },
            afSuccessFn: (res: FavoriteVideoCommentThreadType) => {

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
        nextPageToken: nextPageTokenRef.current,
        ref,
    }
}