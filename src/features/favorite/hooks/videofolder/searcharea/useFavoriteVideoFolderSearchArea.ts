import { mediaQuery, useMediaQuery } from "../../../../../hooks/useMediaQuery";

export function useFavoriteVideoFolderSearchArea() {

    // 画面サイズ判定
    const isPcLess = useMediaQuery(mediaQuery.pcLess);

    return {
        isPcLess
    };
}