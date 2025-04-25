import { useAtom, useAtomValue, useSetAtom } from "jotai";
import useSwitch from "../../Common/Hook/useSwitch";


export function useFavoriteSearchArea() {

    // 条件指定モーダルの表示フラグ
    const { flag: isOpenFilterModal, on: openFilterModal, off: closeFilterModal } = useSwitch();


    return {
        isOpenFilterModal,
        openFilterModal,
        closeFilterModal,
    }
}