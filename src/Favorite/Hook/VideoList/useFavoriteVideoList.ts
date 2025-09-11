import { mediaQuery, useMediaQuery } from "../../../Common/Hook/useMediaQuery";
import { useSyncFavoriteVideoListUrl } from "./useSyncFavoriteVideoListUrl";

export function useFavoriteVideoList() {

    // 検索条件に応じてURLを変更
    useSyncFavoriteVideoListUrl();
}