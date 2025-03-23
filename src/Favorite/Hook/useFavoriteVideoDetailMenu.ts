import { useAtom, useAtomValue } from "jotai";
import { isLoginAtom } from "../../Common/Atom/CommonAtom";
import useMutationWrapper from "../../Common/Hook/useMutationWrapper";
import { errResType, resType } from "../../Common/Hook/useMutationWrapperBase";
import ENV from '../../env.json';
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