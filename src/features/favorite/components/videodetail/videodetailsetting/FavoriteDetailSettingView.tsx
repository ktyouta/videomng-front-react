import React, { ReactNode } from "react";
import { IconComponent } from "../../../../../components/IconComponent";
import styled from "styled-components";
import { FavoriteVideoDetailCategoryType } from "../../../types/videodetail/videodetailsetting/FavoriteVideoDetailCategoryType";
import { Option } from "../../../../../components/Selectbox";
import { FavoriteDetailSettingViewActions } from "./FavoriteDetailSettingViewActions";
import { useFavoriteDetailSettingView } from "../../../hooks/videodetail/videodetailsetting/useFavoriteDetailSettingView";
import { FAVORITE_LEVEL_SETTING_LIST } from "../../../const/FavoriteConst";
import { FaStar } from "react-icons/fa";
import Loading from "../../../../../components/Loading";
import { AccordionComponent } from "../../../../../components/AccordionComponent";
import { FavoriteVideoTagType } from "../../../types/videodetail/videotag/FavoriteVideoTagType";
import TagButtonComponent from "../../../../../components/TagButtonComponent";


const Parent = styled.div`
  display:flex;
`;

const ContentDiv = styled.div`
    color:white;
    display: flex;
    flex-direction: column;
    gap: 37px;
`;

const MetaContentDiv = styled.div`
`;

const TitleDiv = styled.div`
  box-sizing:border-box;
  margin-bottom: 10px;
`;

const MetaDiv = styled.div`
  box-sizing:border-box;
`;

const FlexDiv = styled.div`
  align-items: center;
  display:flex;
  gap: 50px;
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

const LoadingParent = styled(Parent)`
    align-items: center;
    justify-content: center;
    flex: 1;
`;

const FavoriteLevelAreaDiv = styled.div`
  box-sizing:border-box;
  align-items: center;
  display:flex;
  flex-wrap: wrap;
  grid-column-gap: 15px;
`;


type propsType = {
    changeEdit: () => void,
}

export function FavoriteDetailSettingView(props: propsType) {

    console.log("FavoriteDetailSettingView render");

    const {
        viewStatusList,
        data,
        isLoading,
        errMessage,
        videoCategory } = useFavoriteDetailSettingView();

    if (!data) {
        return (
            <LoadingParent>
                <Loading />
            </LoadingParent>
        );
    }

    if (isLoading) {
        return (
            <LoadingParent>
                <Loading />
            </LoadingParent>
        );
    }

    if (errMessage) {
        return (
            <React.Fragment>
                {errMessage}
            </React.Fragment>
        );
    }

    const detail = data.detail;
    const categorys = data.categorys;
    const tags = data.tags;

    return (
        <React.Fragment>
            <FavoriteDetailSettingViewActions
                changeEdit={props.changeEdit}
            />
            <ContentDiv>
                <MetaContentDiv>
                    <TitleDiv>
                        【要約】
                    </TitleDiv>
                    <AccordionComponent
                        defaultHeight={'70px'}
                        outerStyle={{
                            border: "solid 1px",
                            boxSizing: "border-box",
                            padding: "1%",
                            borderRadius: "6px",
                            width: "90%",
                        }}
                    >
                        {detail.summary || `未設定`}
                    </AccordionComponent>
                </MetaContentDiv>
                <MetaContentDiv>
                    <TitleDiv>
                        【カテゴリ】
                    </TitleDiv>
                    <MetaDiv>
                        {
                            categorys && categorys.length > 0 ?
                                <CategoryAreaDiv>
                                    {
                                        categorys && categorys.reduce((prev: ReactNode[], current: FavoriteVideoDetailCategoryType) => {

                                            const category = videoCategory?.find((e1: Option) => {
                                                return e1.value === current.categoryId;
                                            });

                                            if (!category) {
                                                return prev;
                                            }

                                            const categoryId = current.categoryId;

                                            prev.push(
                                                <CategoryDiv
                                                    key={categoryId}
                                                >
                                                    {category.label}
                                                </CategoryDiv>
                                            );
                                            return prev;
                                        }, [])
                                    }
                                </CategoryAreaDiv>
                                :
                                `未設定`
                        }
                    </MetaDiv>
                </MetaContentDiv>
                <FlexDiv>
                    {
                        viewStatusList &&
                        <MetaContentDiv>
                            <TitleDiv>
                                【視聴状況】
                            </TitleDiv>
                            <MetaDiv>
                                {detail.viewStatus ?
                                    viewStatusList.find((e) => {
                                        return e.value === detail.viewStatus
                                    })?.label
                                    : `未設定`}
                            </MetaDiv>
                        </MetaContentDiv>
                    }
                    <MetaContentDiv>
                        <TitleDiv>
                            【お気に入り度】
                        </TitleDiv>
                        <FavoriteLevelAreaDiv>
                            {
                                [...Array(FAVORITE_LEVEL_SETTING_LIST)].map((_, index) => {

                                    const favoriteLevel = index + 1;
                                    const color = detail.favoriteLevel >= favoriteLevel ? `yellow` : ``;

                                    return (
                                        <IconComponent
                                            icon={FaStar}
                                            size="25px"
                                            style={{
                                                color,
                                            }}
                                            key={favoriteLevel}
                                        />
                                    )
                                })
                            }
                        </FavoriteLevelAreaDiv>
                    </MetaContentDiv>
                </FlexDiv>
                <MetaContentDiv>
                    <TitleDiv>
                        【タグ】
                    </TitleDiv>
                    <MetaDiv
                        style={{ marginBottom: "25px" }}
                    >
                        {
                            tags && tags.length > 0
                                ?
                                tags.map((e: FavoriteVideoTagType) => {
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
                                <span>
                                    タグが設定されていません。
                                </span>
                        }
                    </MetaDiv>
                </MetaContentDiv>
            </ContentDiv>
        </React.Fragment>
    );
}