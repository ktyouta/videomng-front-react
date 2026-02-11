import { useState } from "react";
import { SearchKeywordContext, SetSearchKeywordContext } from "../../../../components/videochannel/videodetail/searchkeywordcomment/SearchKeywordComment";
import { SearchKeywordCommentResponseType } from "../../../../types/videodetail/videosearchkeywordcomment/SearchKeywordCommentResponseType";
import { getFavoriteVideoSearchComment } from "../../../../api/getFavoriteVideoSearchComment";
import { useVideoId } from "../useVideoId";


export function useSearchKeywordCommentList() {

    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // 検索用キーワード
    const searchKeyword = SearchKeywordContext.useCtx();
    // 検索用キーワード(setter)
    const setSearchKeyword = SetSearchKeywordContext.useCtx();
    // 動画ID
    const videoId = useVideoId();


    // コメント情報を取得
    const { data: searchCommentData, isLoading } = getFavoriteVideoSearchComment({
        videoId,
        keyword: searchKeyword,
        select: (res: SearchKeywordCommentResponseType) => {
            return res.data;
        },
        onError: (res) => {
            setErrMessage(`コメントの取得に失敗しました。`);
            setSearchKeyword(``);
        }
    });

    return {
        isLoading,
        searchCommentData,
        errMessage,
    }
}