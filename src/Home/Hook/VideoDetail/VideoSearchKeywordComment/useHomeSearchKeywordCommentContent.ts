import { useAtomValue } from "jotai";
import { homeSearchKeywordCommentKeywordAtom } from "../../../Atom/HomeAtom";

export function useHomeSearchKeywordCommentContent() {

    // キーワード
    const searchKeywordCommentKeyword = useAtomValue(homeSearchKeywordCommentKeywordAtom);

    return {
        searchKeywordCommentKeyword
    }
}