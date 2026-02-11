import { useState } from "react";
import { getSearchComment } from "../../../../api/getSearchComment";
import { SearchKeywordContext, SetSearchKeywordContext } from "../../../components/videodetail/videosearchkeywordcomment/HomeSearchKeywordComment";
import { SearchKeywordCommentResponseType } from "../../../types/videodetail/videosearchkeywordcomment/SearchKeywordCommentResponseType";
import { useVideoId } from "../useVideoId";


export function useHomeSearchKeywordCommentList() {

    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // 検索用キーワード
    const searchKeyword = SearchKeywordContext.useCtx();
    // 検索用キーワード(setter)
    const setSearchKeyword = SetSearchKeywordContext.useCtx();
    // 動画ID
    const videoId = useVideoId();

    // コメント情報を取得
    const { data: searchCommentData, isLoading } = getSearchComment({
        videoId,
        keyword: searchKeyword,
        select: (res: SearchKeywordCommentResponseType) => {
            return res.data;
        },
        onError: () => {
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