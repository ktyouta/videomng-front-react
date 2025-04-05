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
import ComboComponent, { comboType } from "../../Common/Component/ComboComponent";
import { FavoriteDetailSettingViewHeader } from "./FavoriteDetailSettingViewHeader";
import { FavoriteDetailSettingEditHeader } from "./FavoriteDetailSettingEditHeader";
import { useFavoriteDetailSettingEdit } from "../Hook/useFavoriteDetailSettingEdit";
import BaseTextAreaComponent from "../../Common/Component/BaseTextAreaComponent";



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
    categoryList: comboType[] | undefined,
    summary: string,
    categorys: FavoriteVideoDetailCategoryType[],
    viewStatus: string,
    changeView: () => void,
    setSummary: React.Dispatch<React.SetStateAction<string>>,
    setCategorys: React.Dispatch<React.SetStateAction<FavoriteVideoDetailCategoryType[]>>,
    setViewStatus: React.Dispatch<React.SetStateAction<string>>,
}

export function FavoriteDetailSettingEdit(props: propsType) {

    console.log("FavoriteDetailSettingEdit render");

    const {
        summary,
        setSummary,
        categorys,
        setCategorys,
        viewStatus,
        setViewStatus,
    } = useFavoriteDetailSettingEdit({ ...props });

    return (
        <React.Fragment>
            <FavoriteDetailSettingEditHeader
                changeView={props.changeView}
            />
            <ContentDiv>
                <TitleDiv>
                    【要約】
                </TitleDiv>
                <MetaDiv>
                    <BaseTextAreaComponent
                        value={summary}
                        onChange={setSummary}
                        textWidth="90%"
                    />
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
                            <ComboComponent
                                combo={props.categoryList}
                                initValue={viewStatus}
                                onChange={setViewStatus}
                                width="25%"
                                height="39px"
                            />
                        </MetaDiv>
                    </React.Fragment>
                }
            </ContentDiv>
        </React.Fragment>
    );
}