import React from "react";
import { IconComponent } from "../../../../Common/Component/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import ComboComponent, { comboType } from "../../../../Common/Component/ComboComponent";
import { useFavoriteDetailSettingEdit } from "../../../Hook/VideoDetail/VideoDetailSetting/useFavoriteDetailSettingEdit";
import BaseTextAreaComponent from "../../../../Common/Component/BaseTextAreaComponent";
import CheckBoxComponent from "../../../../Common/Component/CheckBoxComponent";
import { FAVORITE_LEVEL_SETTING_LIST } from "../../../Const/FavoriteConst";
import { FaStar } from "react-icons/fa";
import { FavoriteVideoTagType } from "../../../Type/VideoDetail/VideoTag/FavoriteVideoTagType";
import TagButtonComponent from "../../../../Common/Component/TagButtonComponent";
import { FavoriteDetailSettingEditActions } from "./FavoriteDetailSettingEditActions";


const ContentDiv = styled.div`
    color:white;
    display: flex;
    flex-direction: column;
    gap: 37px;
`;

const TitleDiv = styled.div`
  box-sizing:border-box;
  margin-bottom:1%;
`;

const MetaDiv = styled.div`
  box-sizing:border-box;
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

const MetaContentDiv = styled.div`
`;

const TagGuideDiv = styled(MetaDiv)`
    font-size: 13px;
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
        tags,
    } = useFavoriteDetailSettingEdit({ ...props });

    return (
        <React.Fragment>
            <FavoriteDetailSettingEditActions
                changeView={props.changeView}
                updateFavoriteVideo={updateFavoriteVideo}
            />
            <ContentDiv>
                <MetaContentDiv>
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
                </MetaContentDiv>
                <MetaContentDiv>
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
                </MetaContentDiv>
                <MetaContentDiv>
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
                </MetaContentDiv>
                <MetaContentDiv>
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
                </MetaContentDiv>
                <MetaContentDiv
                    style={{ marginBottom: "30px" }}
                >
                    <TitleDiv>
                        【タグ】
                    </TitleDiv>
                    <MetaDiv
                        style={{ marginBottom: "10px" }}
                    >
                        {
                            tags && tags.length > 0
                                ?
                                tags?.map((e: FavoriteVideoTagType) => {
                                    return (
                                        <TagButtonComponent
                                            title={e.tagName}
                                            btnStyle={{
                                                marginRight: "15px"
                                            }}
                                            key={e.tagId}
                                        />
                                    )
                                })
                                :
                                <MetaDiv>
                                    タグが設定されていません。
                                </MetaDiv>
                        }
                    </MetaDiv>
                    <TagGuideDiv>
                        ※タグの設定はメニューの「タグ」から行えます。
                    </TagGuideDiv>
                </MetaContentDiv>
            </ContentDiv>
        </React.Fragment>
    );
}