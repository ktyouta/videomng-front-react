import React from "react";
import { IconComponent } from "../../Common/Component/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import { FavoriteVideoMemoType } from "../Type/FavoriteVideoMemoType";
import { FavoriteMemoContent } from "./FavoriteMemoContent";
import BaseTextbox from "../../Common/Component/BaseTextbox";
import { FaArrowUp } from "react-icons/fa";
import { FavoriteMemoCreateInput } from "./FavoriteMemoCreateInput";
import { FavoriteMemoHeader } from "./FavoriteMemoHeader";
import { FavoriteMemoList } from "./FavoriteMemoList";
import { FavoriteCommentHeader } from "./FavoriteCommentHeader";
import { FavoriteCommentList } from "./FavoriteCommentList";
import { FavoriteVideoDetailDataType } from "../Type/FavoriteVideoDetailDataType";
import AccordionComponent from "../../Common/Component/AccordionComponent";
import { useFavoriteDetailSetting } from "../Hook/useFavoriteDetailSetting";
import { EDIT_MODE } from "../Const/FavoriteConst";
import { FavoriteDetailSettingView } from "./FavoriteDetailSettingView";


const Parent = styled.div`
  box-sizing:border-box;
  min-height: 502px;
  background-color: #181a1e;
  border-radius: 1%;
  border: solid 1px;
  padding:2%;
`;


type propsType = {
    videoId: string,
    videoDetail: FavoriteVideoDetailDataType,
}

export function FavoriteDetailSetting(props: propsType) {

    console.log("FavoriteDetailSetting render");

    const {
        categoryList,
        editMode,
        changeEdit,
        changeView,
        summary,
        setSummary,
        categorys,
        setCategorys,
        viewStatus,
        setViewStatus,
    } = useFavoriteDetailSetting({ ...props });

    return (
        <Parent>
            {
                // 閲覧
                editMode === EDIT_MODE.VIEW &&
                <FavoriteDetailSettingView
                    categoryList={categoryList}
                    changeEdit={changeEdit}
                    summary={summary}
                    categorys={categorys}
                    viewStatus={viewStatus}
                />
            }
        </Parent>
    );
}