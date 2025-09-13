import { mediaQuery, useMediaQuery } from "../../../Common/Hook/useMediaQuery";
import { IsLoginContext } from "../../../QueryApp";
import { useGetNowPath } from "../useGetNowPath";

export function useHeaderMenuUl() {

    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);

    return {
        isMobile
    }
}