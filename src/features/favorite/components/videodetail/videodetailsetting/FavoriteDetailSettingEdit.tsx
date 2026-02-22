import React from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import BaseTextAreaComponent from "../../../../../components/BaseTextAreaComponent";
import { Checkbox } from "../../../../../components/Checkbox";
import { IconComponent } from "../../../../../components/IconComponent";
import { Selectbox } from "../../../../../components/Selectbox";
import TagButtonComponent from "../../../../../components/TagButtonComponent";
import { formatDateJP } from "../../../../../utils/CommonFunction";
import { FAVORITE_LEVEL_SETTING_LIST, ISVISIBLEAFTERFOLDERADDLIST } from "../../../const/FavoriteConst";
import { useFavoriteDetailSettingEdit } from "../../../hooks/videodetail/videodetailsetting/useFavoriteDetailSettingEdit";
import { FavoriteVideoCustomFolderType } from "../../../types/videodetail/videodetailsetting/FavoriteVideoCustomFolderType";
import { FavoriteVideoTagType } from "../../../types/videodetail/videotag/FavoriteVideoTagType";
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

const GuideDiv = styled(MetaDiv)`
    font-size: 13px;
`;

const FolderMetaDiv = styled(MetaDiv)`
    margin-bottom: 10px;
    flex-direction: column;
    gap: 7px;
    display:flex;
`;

const CategoryLabel = styled.label`
  width:auto;
`;

const FavoriteLevelAreaDiv = styled.div`
  box-sizing:border-box;
  align-items: center;
  display:flex;
  flex-wrap: wrap;
  grid-column-gap: 15px;
`;

const FlexDiv = styled.div`
  align-items: center;
  display:flex;
  gap: 50px;
  flex-wrap: wrap;
`;

const FolderRowDiv = styled.div`
  box-sizing:border-box;
  display:flex;
  item-align: center;
  gap: 9px;
`;

const FolderNameArea = styled.div`
  display:flex;
  item-align: center;
  gap: 9px;
  flex-wrap: wrap;
`;

const ArrowSpan = styled.span`
`;

const FolderSpan = styled.span`
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
        data,
        isVisibleAfterFolderAdd,
        setIsVisibleAfterFolderAdd,
    } = useFavoriteDetailSettingEdit({ ...props });

    const createDate = data?.detail.createDate;
    const updateDate = data?.detail.updateDate;
    const folders = data?.folders;

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
                                                <Checkbox
                                                    value={e.value}
                                                    htmlForId={htmlId}
                                                    isChecked={checked}
                                                    onChange={selectCategory}
                                                    key={categoryId}
                                                />
                                            </CategoryDiv>
                                        )
                                    })
                                }
                            </CategoryAreaDiv>
                        }
                    </MetaDiv>
                </MetaContentDiv>
                <FlexDiv>
                    <MetaContentDiv>
                        {
                            viewStatusList &&
                            <React.Fragment>
                                <TitleDiv>
                                    【視聴状況】
                                </TitleDiv>
                                <MetaDiv>
                                    <Selectbox
                                        options={viewStatusList}
                                        value={viewStatus}
                                        onChange={setViewStatus}
                                        width="237px"
                                        height="39px"
                                        backgroundColor="rgb(44, 47, 54)"
                                        color="white"
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
                </FlexDiv>
                <MetaContentDiv>
                    <TitleDiv>
                        【フォルダ追加後も一覧に表示する】
                    </TitleDiv>
                    <MetaDiv>
                        <Selectbox
                            options={ISVISIBLEAFTERFOLDERADDLIST}
                            value={isVisibleAfterFolderAdd ?? ISVISIBLEAFTERFOLDERADDLIST[0].value}
                            onChange={setIsVisibleAfterFolderAdd}
                            width="237px"
                            height="39px"
                            backgroundColor="rgb(44, 47, 54)"
                            color="white"
                        />
                    </MetaDiv>
                </MetaContentDiv>
                <MetaContentDiv
                    style={{ marginBottom: "15px" }}
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
                                            tagColor={e.tagColor}
                                        />
                                    )
                                })
                                :
                                <span>
                                    タグが設定されていません。
                                </span>
                        }
                    </MetaDiv>
                    <GuideDiv>
                        ※タグの設定はメニューの「タグ」から行えます。
                    </GuideDiv>
                </MetaContentDiv>
                <MetaContentDiv>
                    <TitleDiv>
                        【所属フォルダ】
                    </TitleDiv>
                    <FolderMetaDiv>
                        {
                            folders && folders.map((folderList: FavoriteVideoCustomFolderType[]) => {
                                return (
                                    <FolderRowDiv>
                                        {
                                            folderList && folderList.length > 0 &&
                                            folderList.map((folder, index) => {
                                                const isLast = index === folderList.length - 1;
                                                return (
                                                    <FolderNameArea>
                                                        <FolderSpan
                                                            key={folder.folderMasterId}
                                                            style={isLast ? {
                                                                borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
                                                                paddingBottom: "1px",
                                                            } : {}}
                                                        >
                                                            {folder.folderName}
                                                        </FolderSpan>
                                                        {
                                                            !isLast &&
                                                            <ArrowSpan>
                                                                &gt;
                                                            </ArrowSpan>
                                                        }
                                                    </FolderNameArea>
                                                )
                                            })
                                        }
                                    </FolderRowDiv>
                                )
                            })
                        }
                    </FolderMetaDiv>
                    <GuideDiv>
                        ※フォルダへの登録はお気に入り一覧画面から行えます。
                    </GuideDiv>
                </MetaContentDiv>
                <FlexDiv
                    style={{ marginBottom: "25px" }}
                >
                    <MetaContentDiv>
                        <TitleDiv>
                            【お気に入り登録日時】
                        </TitleDiv>
                        <MetaDiv>
                            {createDate ? formatDateJP(createDate) : ``}
                        </MetaDiv>
                    </MetaContentDiv>
                    <MetaContentDiv>
                        <TitleDiv>
                            【お気に入り設定更新日時】
                        </TitleDiv>
                        <MetaDiv>
                            {updateDate ? formatDateJP(updateDate) : ``}
                        </MetaDiv>
                    </MetaContentDiv>
                </FlexDiv>
            </ContentDiv>
        </React.Fragment>
    );
}