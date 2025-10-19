import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useMemo, useState } from "react";
import { EDIT_MODE } from "../../../Const/FavoriteConst";
import { FavoriteVideoDetailDataType } from "../../../Type/VideoDetail/FavoriteVideoDetailDataType";
import { useGlobalAtomValue } from "../../../../Common/Hook/useGlobalAtom";


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