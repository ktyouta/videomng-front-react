import { useAtom } from "jotai";
import { keywordAtom } from "../Atom/HomeAtom";

export function useHomeSearchArea() {

    // 検索キーワード
    const [keyword, setKeyword] = useAtom(keywordAtom);

    return {
        keyword,
        setKeyword,
    }
}