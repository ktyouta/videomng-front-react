import { IsLoginContext } from "../../../../app/components/QueryApp";
import { useGetNowPath } from "../useGetNowPath";

export function useHeaderMenuUlPc() {

    // ログインフラグ
    const isLogin = IsLoginContext.useCtx();
    // 現在のパス
    const { nowPath } = useGetNowPath();

    return {
        nowPath,
        isLogin
    }
}