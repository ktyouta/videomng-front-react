import useSwitch from "../../../../../hooks/useSwitch";
import { ChangeEditContext } from "../../../components/videodetail/videotag/FavoriteTag";

export function useFavoriteTagViewActions() {

    // 編集ナビゲーション表示フラグ
    const { flag: isOpenEditNav, on: openEditNav, off: closeEditNav } = useSwitch();
    // 編集画面遷移
    const changeEdit = ChangeEditContext.useCtx();

    return {
        isOpenEditNav,
        openEditNav,
        closeEditNav,
        changeEdit
    }
}