import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { toast } from "react-toastify";
import { homeSearchKeywordCommentKeywordAtom, homeSearchKeywordCommentUrlAtom } from "../Atom/HomeAtom";
import { VideoIdContext } from "../Component/Home";
import { SearchKeywordCommentUrlModel } from "../Model/SearchKeywordCommentUrlModel";


export function useHomeSearchKeywordCommentInput() {

    // キーワード
    const [searchKeywordCommentKeyword, setSearchKeywordCommentKeyword] = useAtom(homeSearchKeywordCommentKeywordAtom);
    // 動画取得用URL
    const setSearchKeywordCommentUrl = useSetAtom(homeSearchKeywordCommentUrlAtom);
    // 動画ID
    const videoId = VideoIdContext.useCtx();


    /**
     * 検索ボタン押下イベント
     * @returns 
     */
    function clickSearchBtn() {

        if (!searchKeywordCommentKeyword) {
            toast.warn(`キーワードを入力してください。`);
            return;
        }

        const searchKeywordCommentUrlModel = new SearchKeywordCommentUrlModel(searchKeywordCommentKeyword, videoId);
        const searchKeywordCommentUrl = searchKeywordCommentUrlModel.path;
        setSearchKeywordCommentUrl(searchKeywordCommentUrl);
    }

    /**
     * 入力中のキーワードをクリアする
     */
    function clearInputKeyword() {
        setSearchKeywordCommentKeyword(``);
    }
    return {
        searchKeywordCommentKeyword,
        setSearchKeywordCommentKeyword,
        clickSearchBtn,
        clearInputKeyword,
    }
}