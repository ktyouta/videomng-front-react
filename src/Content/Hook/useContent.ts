import { useAtomValue } from "jotai";
import { useGlobalAtomValue } from "../../Common/Hook/useGlobalAtom";
import { IsCheckedAuthContext, IsLoginContext } from "../../QueryApp";

export function useContent() {

    // ログインフラグ
    const isLogin = IsLoginContext.useCtx();
    // 認証チェック済みフラグ
    const isCheckedAuth = IsCheckedAuthContext.useCtx();

    return {
        isLogin,
        isCheckedAuth
    }
}