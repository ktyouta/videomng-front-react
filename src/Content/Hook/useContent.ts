import { useAtomValue } from "jotai";
import { useGlobalAtomValue } from "../../Common/Hook/useGlobalAtom";
import { IsLoginContext } from "../../QueryApp";

export function useContent() {

    // ログインフラグ
    const isLogin = IsLoginContext.useCtx();

    return {
        isLogin
    }
}