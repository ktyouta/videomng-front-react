import useSwitch from "../../../../../hooks/useSwitch";
import { ChangeViewContext } from "../../../components/videodetail/videotag/FavoriteTag";

export function useFavoriteTagEditCloseIcon() {

    // 閉じるナビゲーション表示フラグ
    const { flag: isOpenCloseNav, on: openCloseNav, off: closeCloseNav } = useSwitch();
    // 閲覧画面遷移
    const changeView = ChangeViewContext.useCtx();

    return {
        isOpenCloseNav,
        openCloseNav,
        closeCloseNav,
        changeView,
    }
}