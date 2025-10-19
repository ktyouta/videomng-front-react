import React from "react";
import { IconComponent } from "../../../../Common/Component/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import { FavoriteVideoMemoType } from "../../../Type/VideoDetail/VideoMemo/FavoriteVideoMemoType";
import { FavoriteMemoContent } from "../VideoMemo/FavoriteMemoContent";
import BaseTextbox from "../../../../Common/Component/BaseTextbox";
import { FaArrowUp } from "react-icons/fa";
import { FavoriteMemoCreateInput } from "../VideoMemo/FavoriteMemoCreateInput";
import { FavoriteMemoHeader } from "../VideoMemo/FavoriteMemoHeader";
import { FavoriteMemoList } from "../VideoMemo/FavoriteMemoList";
import { FavoriteCommentHeader } from "../VideoComment/FavoriteCommentHeader";
import { FavoriteCommentList } from "../VideoComment/FavoriteCommentList";
import { FavoriteVideoDetailDataType } from "../../../Type/VideoDetail/FavoriteVideoDetailDataType";
import AccordionComponent from "../../../../Common/Component/AccordionComponent";
import { useFavoriteDetailSetting } from "../../../Hook/VideoDetail/VideoDetailSetting/useFavoriteDetailSetting";
import { EDIT_MODE } from "../../../Const/FavoriteConst";
import { FavoriteDetailSettingView } from "./FavoriteDetailSettingView";
import { FavoriteDetailSettingEdit } from "./FavoriteDetailSettingEdit";


const Parent = styled.div`
  box-sizing:border-box;
  min-height: 502px;
  background-color: #181a1e;
  border-radius: 1%;
  border: solid 1px;
  padding:2%;
  display:flex;
  flex-direction: column;
`;


export function FavoriteDetailSetting() {

    console.log("FavoriteDetailSetting render");

    const {
        editMode,
        changeEdit,
        changeView,
    } = useFavoriteDetailSetting();

    return (
        <Parent>
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
        </Parent>
    );
}