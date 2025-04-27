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
import LabelCheckBoxListComponent from "../../Common/Component/LabelCheckBoxListComponent";
import CheckBoxComponent from "../../Common/Component/CheckBoxComponent";



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

const CategoryAreaDiv = styled.div`
  box-sizing:border-box;
  align-items: center;
  display:flex;
  flex-wrap: wrap;
  grid-column-gap: 2%;
`;

const CategoryDiv = styled.div`
  display: flex;
  text-align: center;
  width: auto;
  align-items: center;
`;

const CategoryLabel = styled.label`
  width:auto;
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
        viewStatus,
        setViewStatus,
        viewStatusList,
        selectCategory,
        updateFavoriteVideo,
    } = useFavoriteDetailSettingEdit({ ...props });

    const cateogryList = props.categoryList;

    return (
        <React.Fragment>
            <FavoriteDetailSettingEditHeader
                changeView={props.changeView}
                updateFavoriteVideo={updateFavoriteVideo}
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
                        style={{
                            "backgroundColor": "rgb(44, 47, 54)",
                            "color": "white",
                        }}
                    />
                </MetaDiv>
                <TitleDiv>
                    【カテゴリ】
                </TitleDiv>
                <MetaDiv>
                    {
                        cateogryList && cateogryList.length > 0 &&
                        <CategoryAreaDiv>
                            {
                                cateogryList.map((e) => {

                                    const htmlId = e.value;
                                    const checked = !!categorys.find((e1) => {
                                        return e1 === e.value;
                                    });

                                    const categoryId = e.value;

                                    return (
                                        <CategoryDiv
                                            key={categoryId}
                                        >
                                            <CategoryLabel
                                                htmlFor={htmlId}
                                            >
                                                {e.label}
                                            </CategoryLabel>
                                            <CheckBoxComponent
                                                value={e.value}
                                                htmlForId={htmlId}
                                                initValue={checked}
                                                onChange={selectCategory}
                                            />
                                        </CategoryDiv>
                                    )
                                })
                            }
                        </CategoryAreaDiv>
                    }
                </MetaDiv>
                {
                    viewStatusList &&
                    <React.Fragment>
                        <TitleDiv>
                            【視聴状況】
                        </TitleDiv>
                        <MetaDiv>
                            <ComboComponent
                                combo={viewStatusList}
                                initValue={viewStatus}
                                onChange={setViewStatus}
                                width="25%"
                                height="39px"
                                selectStyle={{
                                    "backgroundColor": "rgb(44, 47, 54)",
                                    "color": "white",
                                }}
                            />
                        </MetaDiv>
                    </React.Fragment>
                }
            </ContentDiv>
        </React.Fragment>
    );
}