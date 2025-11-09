import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useMemo, useState } from "react";
import { EDIT_MODE } from "../../../const/FavoriteConst";
import { FavoriteVideoDetailDataType } from "../../../types/videodetail/FavoriteVideoDetailDataType";
import { useGlobalAtomValue } from "../../../../../hooks/useGlobalAtom";


export function useFavoriteDetailSetting() {

    // 編集モード
    const [editMode, setEditMode] = useState(EDIT_MODE.VIEW);

    /**
     * 編集画面遷移
     */
    function changeEdit() {
        setEditMode(EDIT_MODE.EDIT);
    }

    /**
     * 閲覧画面遷移
     */
    function changeView() {
        setEditMode(EDIT_MODE.VIEW);
    }

    return {
        editMode,
        changeEdit,
        changeView,
    };
}