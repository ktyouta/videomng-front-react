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
    const [openMenuNo, setOpenMenuNo] = useState<MENU_NO>(MENU_NO.NONE);

    /**
     * モーダルオープン
     * @param mode 
     */
    function openMenuModal(mode: MENU_NO) {
        setOpenMenuNo(mode);
    }

    /**
     * モーダルクローズ
     */
    function closeMenuModal() {
        setOpenMenuNo(MENU_NO.NONE);
    }

    function isOpenModal() {
        return openMenuNo !== MENU_NO.NONE
    }

    return {
        openMenuNo,
        openMenuModal,
        closeMenuModal,
        isOpenModal,
    }
}