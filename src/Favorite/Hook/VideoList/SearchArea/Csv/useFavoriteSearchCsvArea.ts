import { mediaQuery, useMediaQuery } from "../../../../../Common/Hook/useMediaQuery";


export function useFavoriteSearchCsvArea() {

    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);


    return {
        isMobile,
    }
}