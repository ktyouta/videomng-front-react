import { mediaQuery, useMediaQuery } from "../../../Common/Hook/useMediaQuery";
import { useSyncFavoriteVideoListUrl } from "./useSyncFavoriteVideoListUrl";

export function useFavoriteVideoList() {

    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);

    // 検索条件に応じてURLを変更
    useSyncFavoriteVideoListUrl();

    return {
        isMobile
    };
}