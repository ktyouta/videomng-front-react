import { useAtom, useAtomValue } from "jotai";
import { isLoginAtom } from "../../Common/Atom/CommonAtom";
import useMutationWrapper from "../../Common/Hook/useMutationWrapper";
import { errResType, resType } from "../../Common/Hook/useMutationWrapperBase";
import ENV from '../../env.json';
import { AddToFavoriteRequestType } from "../Type/AddToFavoriteRequestType";
import { AddToFavoriteResponseType } from "../Type/AddToFavoriteResponseType";
import { HOME_ROOT_PATH, MENU_NO } from "../Const/HomeConst";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export function useHomeVideoDetailMenu() {

    // メニュー番号
    const [openMenuNo, setOpenMenuNo] = useState<string>(MENU_NO.INFO);

    return {
        openMenuNo,
        setOpenMenuNo,
    }
}