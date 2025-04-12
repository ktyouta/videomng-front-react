import { useAtom, useAtomValue, useSetAtom } from "jotai";
import useSwitch from "../../Common/Hook/useSwitch";
import { favoriteVideoApiUrlAtom, selectedFavoriteVideoCategoryAtom } from "../Atom/FavoriteAtom";


export function useFavoriteSearchArea() {

    // 条件指定モーダルの表示フラグ
    const { flag: isOpenFilterModal, on: openFilterModal, off: closeFilterModal } = useSwitch();


    return {
        isOpenFilterModal,
        openFilterModal,
        closeFilterModal,
    }
}