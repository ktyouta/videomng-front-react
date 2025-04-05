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

const ContentDiv = styled.div`
    color:white;
`;

const TitleDiv = styled.div`
  box-sizing:border-box;
  margin-bottom:1%;
`;

const MetaDiv = styled.div`
  box-sizing:border-box;
  margin-bottom:4%;
`;


type propsType = {
    videoId: string,
    videoDetail: FavoriteVideoDetailDataType | undefined,
}

export function FavoriteDetailSetting(props: propsType) {

    console.log("FavoriteDetailSetting render");

    const {
        categoryList,
        editMode,
        setEditMode } = useFavoriteDetailSetting();

    return (
        <Parent>
            {
                // 閲覧
                editMode === EDIT_MODE.VIEW &&
                <FavoriteDetailSettingView
                    videoId={props.videoId}
                    videoDetail={props.videoDetail}
                    categoryList={categoryList}
                />
            }
        </Parent>
    );
}