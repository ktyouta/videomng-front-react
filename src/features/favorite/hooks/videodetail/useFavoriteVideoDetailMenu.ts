import { MENU_NO } from "../../const/FavoriteConst";
import { useNavigate } from "react-router-dom";
import useSwitch from "../../../../hooks/useSwitch";
import { useState } from "react";
import { mediaQuery, useMediaQuery } from "../../../../hooks/useMediaQuery";


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