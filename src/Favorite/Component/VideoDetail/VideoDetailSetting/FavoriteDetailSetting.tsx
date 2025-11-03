import styled from "styled-components";
import { useFavoriteDetailSetting } from "../../../Hook/VideoDetail/VideoDetailSetting/useFavoriteDetailSetting";
import { EDIT_MODE } from "../../../Const/FavoriteConst";
import { FavoriteDetailSettingView } from "./FavoriteDetailSettingView";
import { FavoriteDetailSettingEdit } from "./FavoriteDetailSettingEdit";
import React from "react";


export function FavoriteDetailSetting() {

    console.log("FavoriteDetailSetting render");

    const {
        editMode,
        changeEdit,
        changeView,
    } = useFavoriteDetailSetting();

    return (
        <React.Fragment>
            {
                // 閲覧
                editMode === EDIT_MODE.VIEW &&
                <FavoriteDetailSettingView
                    changeEdit={changeEdit}
                />
            }
            {
                // 編集
                editMode === EDIT_MODE.EDIT &&
                <FavoriteDetailSettingEdit
                    changeView={changeView}
                />
            }
        </React.Fragment>
    );
}