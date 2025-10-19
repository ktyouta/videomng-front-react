import React, { ReactNode } from "react";
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
import { comboType } from "../../../../Common/Component/ComboComponent";
import { FavoriteDetailSettingViewHeader } from "./FavoriteDetailSettingViewHeader";
import { useFavoriteDetailSettingView } from "../../../Hook/VideoDetail/VideoDetailSetting/useFavoriteDetailSettingView";
import { FAVORITE_LEVEL_SETTING_LIST } from "../../../Const/FavoriteConst";
import { FaStar } from "react-icons/fa";
import Loading from "../../../../Common/Component/Loading";


const Parent = styled.div`
  display:flex;
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
  grid-column-gap: 2%;
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
                    {detail.summary ?? `なし`}
                </MetaDiv>
                <TitleDiv>
                    【カテゴリ】
                </TitleDiv>
                <MetaDiv>
                    {
                        categorys && categorys.length > 0 ?
                            <CategoryAreaDiv>
                                {
                                    categorys && categorys.reduce((prev: ReactNode[], current: FavoriteVideoDetailCategoryType) => {

                                        const category = videoCategory?.find((e1: comboType) => {
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
                            {detail.viewStatus ?
                                viewStatusList.find((e) => {
                                    return e.value === detail.viewStatus
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
            </ContentDiv>
        </React.Fragment>
    );
}