import { useState } from "react";
import useQueryWrapper from "../../../../Common/Hook/useQueryWrapper";
import { SearchKeywordCommentType } from "../../../Type/VideoDetail/VideoSearchKeywordComment/SearchKeywordCommentType";
import { SearchKeywordCommentResponseType } from "../../../Type/VideoDetail/VideoSearchKeywordComment/SearchKeywordCommentResponseType";
import { useFavoriteSearchKeywordCommentEndpoint } from "./useFavoriteSearchKeywordCommentEndpoint";
import { SearchKeywordCommentKeywordContext } from "../../../Component/VideoDetail/VideoSearchKeywordComment/FavoriteSearchKeywordComment";
import { useVideoId } from "../useVideoId";


export function useFavoriteSearchKeywordCommentList() {

    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // 検索用キーワード
    const searchKeywordCommentKeyword = SearchKeywordCommentKeywordContext.useCtx();
    // 動画ID
    const videoId = useVideoId();


    // コメント情報を取得
    const { data: searchCommentList, isLoading } = useQueryWrapper<SearchKeywordCommentResponseType, SearchKeywordCommentType[]>(
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
        searchCommentList,
        errMessage,
    }
}