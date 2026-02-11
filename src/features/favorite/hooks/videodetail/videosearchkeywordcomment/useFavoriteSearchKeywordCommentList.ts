import { useState } from "react";
import { getFavoriteVideoSearchComment } from "../../../api/getFavoriteVideoSearchComment";
import { SearchKeywordCommentKeywordContext } from "../../../components/videodetail/videosearchkeywordcomment/FavoriteSearchKeywordComment";
import { SearchKeywordCommentResponseType } from "../../../types/videodetail/videosearchkeywordcomment/SearchKeywordCommentResponseType";
import { useVideoId } from "../useVideoId";


export function useFavoriteSearchKeywordCommentList() {

    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // 検索用キーワード
    const searchKeywordCommentKeyword = SearchKeywordCommentKeywordContext.useCtx();
    // 動画ID
    const videoId = useVideoId();

    // コメント情報を取得
    const { data: searchCommentData, isLoading } = getFavoriteVideoSearchComment({
        videoId,
        keyword: searchKeywordCommentKeyword,
        select: (res: SearchKeywordCommentResponseType) => {
            return res.data;
        },
        onError: (res) => {
            setErrMessage(`コメントの取得に失敗しました。`);
        }
    });

    return {
        isLoading,
        searchCommentData,
        errMessage,
    }
}