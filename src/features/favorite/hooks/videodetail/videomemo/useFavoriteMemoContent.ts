import useSwitch from "../../../../../hooks/useSwitch";


export function useFavoriteMemoContent() {

    // メモ編集エリアの切り替えフラグ
    const { flag: isOpenEdit, on: openEdit, off: closeEdit } = useSwitch();

    return {
        isOpenEdit,
        openEdit,
        closeEdit,
    }
}