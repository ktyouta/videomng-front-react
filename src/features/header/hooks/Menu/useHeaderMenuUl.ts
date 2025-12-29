import { mediaQuery, useMediaQuery } from "../../../../hooks/useMediaQuery";

export function useHeaderMenuUl() {

    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);

    return {
        isMobile
    }
}