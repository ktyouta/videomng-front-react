import { IsCheckedAuthContext, IsLoginContext } from "../../../app/components/QueryApp";
import { useSortList } from "./useSortList";

export function useContent() {

    // ログインフラグ
    const isLogin = IsLoginContext.useCtx();
    // 認証チェック済みフラグ
    const isCheckedAuth = IsCheckedAuthContext.useCtx();
    // マウント時にソートリストを取得
    useSortList({
        isGetChache: false
    });

    return {
        isLogin,
        isCheckedAuth
    }
}