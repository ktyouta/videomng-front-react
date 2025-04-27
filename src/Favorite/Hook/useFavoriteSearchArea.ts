import { useAtom, useAtomValue, useSetAtom } from "jotai";
import useSwitch from "../../Common/Hook/useSwitch";
import { selectedFavoriteVideoTagAtom } from "../Atom/FavoriteAtom";


export function useFavoriteSearchArea() {

    // 条件指定モーダルの表示フラグ
    const { flag: isOpenFilterModal, on: openFilterModal, off: closeFilterModal } = useSwitch();
    // 動画一覧検索条件選択値(タグ)
    const selectedFavoriteVideoTag = useAtomValue(selectedFavoriteVideoTagAtom);


    return {
        isOpenFilterModal,
        openFilterModal,
        closeFilterModal,
        selectedFavoriteVideoTag,
    }
}