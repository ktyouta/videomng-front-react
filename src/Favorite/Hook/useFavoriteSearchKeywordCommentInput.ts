import { useAtomValue, useSetAtom } from "jotai";
import { favoriteVideoMemoListAtom, searchKeywordCommentUrlAtom } from "../Atom/FavoriteAtom";
import { useState } from "react";
import useMutationWrapper from "../../Common/Hook/useMutationWrapper";
import ENV from "../../env.json";
import { AddToFavoriteVideoMemoResponseType } from "../Type/AddToFavoriteVideoMemoResponseType";
import { errResType, resType } from "../../Common/Hook/useMutationWrapperBase";
import { AddToFavoriteVideoMemoReqestType } from "../Type/AddToFavoriteVideoMemoReqestType";
import { FavoriteVideoMemoType } from "../Type/FavoriteVideoMemoType";
import { SearchKeywordCommentUrlModel } from "../Model/SearchKeywordCommentUrlModel";


export function useFavoriteSearchKeywordCommentInput() {

    // キーワード
    const [inputKeyword, setInputKeyword] = useState(``);
    // 動画取得用URL
    const setSearchKeywordCommentUrl = useSetAtom(searchKeywordCommentUrlAtom);


    /**
     * 検索ボタン押下イベント
     * @returns 
     */
    function clickSearchBtn(videoId: string) {

        if (!inputKeyword) {
            alert(`キーワードを入力してください。`);
            return;
        }

        const searchKeywordCommentUrlModel = new SearchKeywordCommentUrlModel(inputKeyword, videoId);
        const searchKeywordCommentUrl = searchKeywordCommentUrlModel.path;
        setSearchKeywordCommentUrl(searchKeywordCommentUrl);
    }


    return {
        inputKeyword,
        setInputKeyword,
        clickSearchBtn,
    }
}