import { mediaQuery, useMediaQuery } from "../../../../../../hooks/useMediaQuery";


export function useFavoriteSearchCsvArea() {

    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);


    return {
        isMobile,
    }
}