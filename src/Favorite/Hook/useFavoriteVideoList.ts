import { mediaQuery, useMediaQuery } from "../../Common/Hook/useMediaQuery";

export function useFavoriteVideoList() {

    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);

    return {
        isMobile
    };
}