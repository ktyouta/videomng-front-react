import { useAtomValue } from "jotai";
import { isLoginAtom } from "../../Common/Atom/CommonAtom";

export function useContent() {

    // ログインフラグ
    const isLogin = useAtomValue(isLoginAtom);

    return {
        isLogin
    }
}