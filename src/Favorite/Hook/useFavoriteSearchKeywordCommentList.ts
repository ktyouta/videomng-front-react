import { useAtom, useAtomValue } from "jotai";
import { favoriteVideoIdAtom, searchKeywordCommentAtom, searchKeywordCommentUrlAtom } from "../Atom/FavoriteAtom";
import { useState } from "react";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";
import { errResType } from "../../Common/Hook/useMutationWrapperBase";
import { FavoriteVideoMemoResponseType } from "../Type/FavoriteVideoMemoResponseType";
import { SearchKeywordCommentType } from "../Type/SearchKeywordCommentType";
import { SearchKeywordCommentResponseType } from "../Type/SearchKeywordCommentResponseType";


export function useFavoriteSearchKeywordCommentList() {

    // コメント情報
    const [searchCommentList, setSearchCommentList] = useAtom(searchKeywordCommentAtom);
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // 動画取得用URL
    const [searchKeywordCommentUrl, setSearchKeywordCommentUrl] = useAtom(searchKeywordCommentUrlAtom);


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