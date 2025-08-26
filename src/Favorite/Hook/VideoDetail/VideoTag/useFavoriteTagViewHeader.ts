import useSwitch from "../../../../Common/Hook/useSwitch";
import { ChangeEditContext } from "../../../Component/VideoDetail/VideoTag/FavoriteTag";

export function useFavoriteTagViewHeader() {

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