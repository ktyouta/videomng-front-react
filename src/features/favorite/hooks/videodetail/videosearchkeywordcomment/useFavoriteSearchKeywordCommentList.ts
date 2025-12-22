import { useState } from "react";
import useQueryWrapper from "../../../../../hooks/useQueryWrapper";
import { SearchKeywordCommentKeywordContext } from "../../../components/videodetail/videosearchkeywordcomment/FavoriteSearchKeywordComment";
import { SearchKeywordCommentResponseDataType } from "../../../types/videodetail/videosearchkeywordcomment/SearchKeywordCommentResponseDataType";
import { SearchKeywordCommentResponseType } from "../../../types/videodetail/videosearchkeywordcomment/SearchKeywordCommentResponseType";
import { useVideoId } from "../useVideoId";
import { useFavoriteSearchKeywordCommentEndpoint } from "./useFavoriteSearchKeywordCommentEndpoint";


export function useFavoriteSearchKeywordCommentList() {

    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // 検索用キーワード
    const searchKeywordCommentKeyword = SearchKeywordCommentKeywordContext.useCtx();
    // 動画ID
    const videoId = useVideoId();


    // コメント情報を取得
    const { data: searchCommentData, isLoading } = useQueryWrapper<SearchKeywordCommentResponseType, SearchKeywordCommentResponseDataType>(
        {
            url: useFavoriteSearchKeywordCommentEndpoint({
                videoId,
                keyword: searchKeywordCommentKeyword
            }),
            select: (res: SearchKeywordCommentResponseType) => {
                return res.data;
            },
            afErrorFn: (res) => {
                setErrMessage(`コメントの取得に失敗しました。`);
            }
        }
    );

    return {
        isLoading,
        searchCommentData,
        errMessage,
    }
}