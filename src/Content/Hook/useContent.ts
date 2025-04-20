import { useAtomValue } from "jotai";
import { isLoginAtom } from "../../Common/Atom/CommonAtom";
import { useGlobalAtomValue } from "../../Common/Hook/useGlobalAtom";

export function useContent() {

    // ログインフラグ
    const isLogin = useGlobalAtomValue(isLoginAtom);

    return {
        isLogin
    }
}