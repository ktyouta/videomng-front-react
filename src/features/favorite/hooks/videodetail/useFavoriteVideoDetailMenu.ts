import { useState } from "react";
import { mediaQuery, useMediaQuery } from "../../../../hooks/useMediaQuery";
import { MENU_NO } from "../../const/FavoriteConst";


export function useFavoriteVideoDetailMenu() {

    // メニュー番号
    const [openMenuNo, setOpenMenuNo] = useState<string>(MENU_NO.INFO);
    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);

    return {
        openMenuNo,
        setOpenMenuNo,
        isMobile,
    }
}