import React, { ReactNode } from "react";
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
import { FavoriteDetailSettingViewHeader } from "./FavoriteDetailSettingViewHeader";
import { useFavoriteDetailSettingView } from "../Hook/useFavoriteDetailSettingView";
import { FAVORITE_LEVEL_SETTING_LIST } from "../Const/FavoriteConst";
import { FaStar } from "react-icons/fa";


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

const FavoriteLevelAreaDiv = styled.div`
  box-sizing:border-box;
  align-items: center;
  display:flex;
  flex-wrap: wrap;
  grid-column-gap: 2%;
`;


type propsType = {
    categoryList: comboType[] | undefined,
    changeEdit: () => void,
    summary: string,
    categorys: FavoriteVideoDetailCategoryType[],
    viewStatus: string,
    favoriteLevel: number,
}

export function FavoriteDetailSettingView(props: propsType) {

    console.log("FavoriteDetailSettingView render");

    const { viewStatusList } = useFavoriteDetailSettingView();

    return (
        <React.Fragment>
            <FavoriteDetailSettingViewHeader
                changeEdit={props.changeEdit}
            />
            <ContentDiv>
                <TitleDiv>
                    【要約】
                </TitleDiv>
                <MetaDiv>
                    {props.summary ?? `なし`}
                </MetaDiv>
                <TitleDiv>
                    【カテゴリ】
                </TitleDiv>
                <MetaDiv>
                    {
                        props.categorys && props.categorys.length > 0 ?
                            <CategoryAreaDiv>
                                {
                                    props.categorys && props.categorys.reduce((prev: ReactNode[], current: FavoriteVideoDetailCategoryType) => {

                                        const category = props.categoryList?.find((e1: comboType) => {
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
                {
                    viewStatusList &&
                    <React.Fragment>
                        <TitleDiv>
                            【視聴状況】
                        </TitleDiv>
                        <MetaDiv>
                            {props.viewStatus ?
                                viewStatusList.find((e) => {
                                    return e.value === props.viewStatus
                                })?.label
                                : `未設定`}
                        </MetaDiv>
                    </React.Fragment>
                }
                <TitleDiv>
                    【お気に入り度】
                </TitleDiv>
                <FavoriteLevelAreaDiv>
                    {
                        [...Array(FAVORITE_LEVEL_SETTING_LIST)].map((_, index) => {

                            const favoriteLevel = index + 1;
                            const color = props.favoriteLevel >= favoriteLevel ? `yellow` : ``;

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
            </ContentDiv>
        </React.Fragment>
    );
}