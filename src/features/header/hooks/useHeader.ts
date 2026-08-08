import { ROUTER_PATH } from "../../../consts/RouterPath";
import { useAppNavigation } from "../../../hooks/useAppNavigation";
import { mediaQuery, useMediaQuery } from "../../../hooks/useMediaQuery";

export function useHeader() {

    // ルーティング用
    const { appNavigate } = useAppNavigation();
    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);

    /**
     * タイトルクリック
     */
    function clickTitle() {
        appNavigate(`${ROUTER_PATH.HOME.ROOT}`);
    }

    return {
        clickTitle,
        isMobile
    }
}