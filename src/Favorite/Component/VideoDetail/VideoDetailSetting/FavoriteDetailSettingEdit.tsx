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
import { FavoriteVideoDetailCategoryType } from "../../../Type/VideoDetail/VideoDetailSetting/FavoriteVideoDetailCategoryType";
import ComboComponent, { comboType } from "../../../../Common/Component/ComboComponent";
import { useFavoriteDetailSettingEdit } from "../../../Hook/VideoDetail/VideoDetailSetting/useFavoriteDetailSettingEdit";
import BaseTextAreaComponent from "../../../../Common/Component/BaseTextAreaComponent";
import LabelCheckBoxListComponent from "../../../../Common/Component/LabelCheckBoxListComponent";
import CheckBoxComponent from "../../../../Common/Component/CheckBoxComponent";
import { FAVORITE_LEVEL_SETTING_LIST } from "../../../Const/FavoriteConst";
import { FaStar } from "react-icons/fa";
import { FavoriteDetailSettingEditFooter } from "./FavoriteDetailSettingEditFooter";


const ContentDiv = styled.div`
    color:white;
    flex: 1;
`;

const TitleDiv = styled.div`
  box-sizing:border-box;
  margin-bottom:1%;
`;

const MetaDiv = styled.div`
  box-sizing:border-box;
  margin-bottom: 37px;
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

const FavoriteLevelAreaDiv = styled.div`
  box-sizing:border-box;
  align-items: center;
  display:flex;
  flex-wrap: wrap;
  grid-column-gap: 2%;
  margin-bottom: 4%;
`;


type propsType = {
    changeView: () => void,
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
        favoriteLevel,
        clickFavoriteLevelIcon,
        videoCategory,
    } = useFavoriteDetailSettingEdit({ ...props });

    return (
        <React.Fragment>
            <ContentDiv>
                <TitleDiv>
                    【要約】
                </TitleDiv>
                <MetaDiv>
                    <BaseTextAreaComponent
                        value={summary}
                        onChange={setSummary}
                        textWidth="94%"
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
                        videoCategory && videoCategory.length > 0 &&
                        <CategoryAreaDiv>
                            {
                                videoCategory.map((e) => {

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
                <TitleDiv>
                    【お気に入り度】
                </TitleDiv>
                <FavoriteLevelAreaDiv>
                    {
                        [...Array(FAVORITE_LEVEL_SETTING_LIST)].map((_, index) => {

                            const favoriteLevelId = index + 1;
                            const color = favoriteLevel >= favoriteLevelId ? `yellow` : ``;

                            return (
                                <IconComponent
                                    icon={FaStar}
                                    size="25px"
                                    style={{
                                        color,
                                    }}
                                    onclick={() => {
                                        clickFavoriteLevelIcon(favoriteLevelId);
                                    }}
                                />
                            )
                        })
                    }
                </FavoriteLevelAreaDiv>
            </ContentDiv>
            <FavoriteDetailSettingEditFooter
                changeView={props.changeView}
                updateFavoriteVideo={updateFavoriteVideo}
            />
        </React.Fragment>
    );
}