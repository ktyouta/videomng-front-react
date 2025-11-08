import { useState } from "react";
import { toast } from "react-toastify";
import { mediaQuery, useMediaQuery } from "../../../../Common/Hook/useMediaQuery";
import { SetSearchKeywordCommentKeywordContext } from "../../../Component/VideoDetail/VideoSearchKeywordComment/FavoriteSearchKeywordComment";


export function useFavoriteSearchKeywordCommentInput() {

    // 入力用キーワード
    const [inputKeyword, setInputKeyword] = useState(``);
    // 検索用キーワード(setter)
    const setSearchKeywordCommentKeyword = SetSearchKeywordCommentKeywordContext.useCtx();

    /**
     * 検索ボタン押下イベント
     * @returns 
     */
    function clickSearchBtn() {

        if (!inputKeyword) {
            toast.warn(`キーワードを入力してください。`);
            return;
        }

        setSearchKeywordCommentKeyword(inputKeyword);
    }

    /**
     * 入力中のキーワードをクリアする
     */
    function clearInputKeyword() {
        setInputKeyword(``);
    }

    return {
        inputKeyword,
        setInputKeyword,
        clickSearchBtn,
        clearInputKeyword,
    }
}