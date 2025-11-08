import { toast } from "react-toastify";
import { mediaQuery, useMediaQuery } from "../../../../Common/Hook/useMediaQuery";
import { useState } from "react";
import { SetSearchKeywordContext } from "../../../Component/VideoDetail/VideoSearchKeywordComment/HomeSearchKeywordComment";


export function useHomeSearchKeywordCommentInput() {

    // 入力用キーワード
    const [inputKeyword, setInputKeyword] = useState(``);
    // 検索用キーワード(setter)
    const setSearchKeyword = SetSearchKeywordContext.useCtx();

    /**
     * 検索ボタン押下イベント
     * @returns 
     */
    function clickSearchBtn() {

        if (!inputKeyword) {
            toast.warn(`キーワードを入力してください。`);
            return;
        }

        setSearchKeyword(inputKeyword);
    }

    /**
     * 入力中のキーワードをクリアする
     */
    function clearInputKeyword() {
        setInputKeyword(``);
    }

    return {
        clickSearchBtn,
        clearInputKeyword,
        inputKeyword,
        setInputKeyword,
    }
}