import { useState } from "react";
import useQueryWrapper from "../../../../Common/Hook/useQueryWrapper";
import { SearchKeywordCommentResponseType } from "../../../Type/VideoDetail/VideoSearchKeywordComment/SearchKeywordCommentResponseType";
import { SearchKeywordCommentType } from "../../../Type/VideoDetail/VideoSearchKeywordComment/SearchKeywordCommentType";
import { useHomeSearchKeywordCommentEndpoint } from "./useHomeSearchKeywordCommentEndpoint";
import { SearchKeywordContext, SetSearchKeywordContext } from "../../../Component/VideoDetail/VideoSearchKeywordComment/HomeSearchKeywordComment";
import { VideoIdContext } from "../../../Component/VideoDetail/HomeVideoDetail";


export function useHomeSearchKeywordCommentList() {

    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // 動画ID
    const videoId = VideoIdContext.useCtx();
    // 検索用キーワード
    const searchKeyword = SearchKeywordContext.useCtx();
    // 検索用キーワード(setter)
    const setSearchKeyword = SetSearchKeywordContext.useCtx();

    // コメント情報を取得
    const { data: searchCommentList, isLoading } = useQueryWrapper<SearchKeywordCommentResponseType, SearchKeywordCommentType[]>(
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
        searchCommentList,
        errMessage,
    }
}