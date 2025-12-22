import { useState } from "react";
import useQueryWrapper from "../../../../../hooks/useQueryWrapper";
import { SearchKeywordContext, SetSearchKeywordContext } from "../../../components/videodetail/videosearchkeywordcomment/HomeSearchKeywordComment";
import { SearchKeywordCommentResponseDataType } from "../../../types/videodetail/videosearchkeywordcomment/SearchKeywordCommentResponseDataType";
import { SearchKeywordCommentResponseType } from "../../../types/videodetail/videosearchkeywordcomment/SearchKeywordCommentResponseType";
import { useVideoId } from "../useVideoId";
import { useHomeSearchKeywordCommentEndpoint } from "./useHomeSearchKeywordCommentEndpoint";


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
    const { data: searchCommentData, isLoading } = useQueryWrapper<SearchKeywordCommentResponseType, SearchKeywordCommentResponseDataType>(
        {
            url: useHomeSearchKeywordCommentEndpoint({
                videoId,
                keyword: searchKeyword
            }),
            select: (res: SearchKeywordCommentResponseType) => {
                return res.data;
            },
            afErrorFn: (res) => {
                setErrMessage(`コメントの取得に失敗しました。`);
                setSearchKeyword(``);
            }
        }
    );

    return {
        isLoading,
        searchCommentData,
        errMessage,
    }
}