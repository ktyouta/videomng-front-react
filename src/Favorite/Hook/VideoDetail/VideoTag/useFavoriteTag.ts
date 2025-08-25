import { useState } from "react";
import { TAG_EDIT_MODE } from "../../../Const/FavoriteConst";


export function useFavoriteTag() {

    // 編集フラグ
    const [editMode, setEditMode] = useState(TAG_EDIT_MODE.VIEW);

    /**
     * 編集画面遷移
     */
    function changeEdit() {
        setEditMode(TAG_EDIT_MODE.EDIT);
    }

    /**
     * 閲覧画面遷移
     */
    function changeView() {
        setEditMode(TAG_EDIT_MODE.VIEW);
    }

    return {
        editMode,
        changeEdit,
        changeView,
    }

}