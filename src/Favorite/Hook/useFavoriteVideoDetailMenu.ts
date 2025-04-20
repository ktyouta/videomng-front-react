import { FAVORITE_ROOT_PATH, MENU_NO } from "../Const/FavoriteConst";
import { useNavigate } from "react-router-dom";
import useSwitch from "../../Common/Hook/useSwitch";
import { useState } from "react";


export function useFavoriteVideoDetailMenu() {

    // メニュー番号
    const [openMenuNo, setOpenMenuNo] = useState<string>(MENU_NO.INFO);

    return {
        openMenuNo,
        setOpenMenuNo,
    }
}