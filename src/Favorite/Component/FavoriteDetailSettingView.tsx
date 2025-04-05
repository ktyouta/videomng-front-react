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
import { FavoriteVideoDetailCategoryType } from "../Type/FavoriteVideoDetailCategoryType";
import { comboType } from "../../Common/Component/ComboComponent";


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
    categoryList: comboType[] | undefined,
}

export function FavoriteDetailSettingView(props: propsType) {

    console.log("FavoriteDetailSettingView render");

    const videoDetail = props.videoDetail;
    // 要約
    const summary = videoDetail?.detail.summary;
    // 視聴状況
    const viewStatus = videoDetail?.detail.viewStatus;
    // カテゴリ
    const categorys = videoDetail?.categorys;

    return (
        <ContentDiv>
            <TitleDiv>
                【要約】
            </TitleDiv>
            <MetaDiv>
                {summary ?? `なし`}
            </MetaDiv>
            <TitleDiv>
                【カテゴリ】
            </TitleDiv>
            <MetaDiv>
                {categorys && categorys.length ?
                    categorys.map((e: FavoriteVideoDetailCategoryType) => {
                        return (
                            <React.Fragment>
                                {e.categoryName}
                            </React.Fragment>
                        )
                    })
                    :
                    `未設定`
                }
            </MetaDiv>
            {
                props.categoryList &&
                <React.Fragment>
                    <TitleDiv>
                        【視聴状況】
                    </TitleDiv>
                    <MetaDiv>
                        {viewStatus ?
                            props.categoryList.find((e) => {
                                return e.value === viewStatus
                            })?.label
                            : `未設定`}
                    </MetaDiv>
                </React.Fragment>
            }
        </ContentDiv>
    );
}