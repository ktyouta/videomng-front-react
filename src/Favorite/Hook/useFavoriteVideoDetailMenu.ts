import { useAtom, useAtomValue } from "jotai";
import { isLoginAtom } from "../../Common/Atom/CommonAtom";
import useMutationWrapper from "../../Common/Hook/useMutationWrapper";
import { errResType, resType } from "../../Common/Hook/useMutationWrapperBase";
import ENV from '../../env.json';
import { FAVORITE_ROOT_PATH } from "../Const/FavoriteConst";
import { useNavigate } from "react-router-dom";
import useSwitch from "../../Common/Hook/useSwitch";


export function useFavoriteVideoDetailMenu() {

    //モーダルの開閉用フラグ
    const { flag: isModalOpen, on: openModel, off: closeModal } = useSwitch();

    return {
        isModalOpen,
        openModel,
        closeModal,
    }
}