import { useAtom, useAtomValue } from "jotai";
import { useState } from "react";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import { SearchKeywordCommentResponseType } from "../Type/SearchKeywordCommentResponseType";
import { homeSearchKeywordCommentAtom, homeSearchKeywordCommentUrlAtom } from "../Atom/HomeAtom";


export function useHomeSearchKeywordCommentList() {

    // コメント情報
    const [searchCommentList, setSearchCommentList] = useAtom(homeSearchKeywordCommentAtom);
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // 動画取得用URL
    const [searchKeywordCommentUrl, setSearchKeywordCommentUrl] = useAtom(homeSearchKeywordCommentUrlAtom);


    // コメント情報を取得
    const { isLoading } = useQueryWrapper<SearchKeywordCommentResponseType>(
        {
            url: `${searchKeywordCommentUrl}`,
            afSuccessFn: (response: SearchKeywordCommentResponseType) => {
                setSearchCommentList(response.data);
            },
            afErrorFn: (res) => {
                setErrMessage(`コメントの取得に失敗しました。`);
                setSearchKeywordCommentUrl(``);
            }
        }
    );

    return {
        isLoading,
        searchCommentList,
        errMessage,
    }
}