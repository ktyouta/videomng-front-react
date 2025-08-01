import { mediaQuery, useMediaQuery } from "./useMediaQuery";
import useSwitch from "./useSwitch";

export function useConfirmModalComponent() {

    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);

    return {
        isMobile
    };
}