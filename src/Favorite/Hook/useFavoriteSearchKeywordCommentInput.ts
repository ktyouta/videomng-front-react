import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { favoriteVideoMemoListAtom, searchKeywordCommentKeywordAtom, searchKeywordCommentUrlAtom } from "../Atom/FavoriteAtom";
import { useState } from "react";
import useMutationWrapper from "../../Common/Hook/useMutationWrapper";
import ENV from "../../env.json";
import { AddToFavoriteVideoMemoResponseType } from "../Type/AddToFavoriteVideoMemoResponseType";
import { errResType, resType } from "../../Common/Hook/useMutationWrapperBase";
import { AddToFavoriteVideoMemoReqestType } from "../Type/AddToFavoriteVideoMemoReqestType";
import { FavoriteVideoMemoType } from "../Type/FavoriteVideoMemoType";
import { SearchKeywordCommentUrlModel } from "../Model/SearchKeywordCommentUrlModel";
import { FavoriteVideoIdContext } from "../Component/Favorite";


export function useFavoriteSearchKeywordCommentInput() {

    // キーワード
    const [searchKeywordCommentKeyword, setSearchKeywordCommentKeyword] = useAtom(searchKeywordCommentKeywordAtom);
    // 動画取得用URL
    const setSearchKeywordCommentUrl = useSetAtom(searchKeywordCommentUrlAtom);
    // お気に入り動画ID
    const favoriteVideoId = FavoriteVideoIdContext.useCtx();


    /**
     * 検索ボタン押下イベント
     * @returns 
     */
    function clickSearchBtn() {

        if (!searchKeywordCommentKeyword) {
            alert(`キーワードを入力してください。`);
            return;
        }

        const searchKeywordCommentUrlModel = new SearchKeywordCommentUrlModel(searchKeywordCommentKeyword, favoriteVideoId);
        const searchKeywordCommentUrl = searchKeywordCommentUrlModel.path;
        setSearchKeywordCommentUrl(searchKeywordCommentUrl);
    }


    return {
        searchKeywordCommentKeyword,
        setSearchKeywordCommentKeyword,
        clickSearchBtn,
    }
}