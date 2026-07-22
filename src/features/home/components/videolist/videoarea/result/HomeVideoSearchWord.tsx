import React from "react";
import { FaBookmark } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import styled from "styled-components";
import { IconComponent } from "../../../../../../components/IconComponent";
import { MEDIA } from "../../../../../../consts/MediaConst";
import { mediaQuery, useMediaQuery } from "../../../../../../hooks/useMediaQuery";
import {
  FAVORITE_KEYWORD_MAX,
  HOME_SEARCH_AREA_ACCENT_COLOR,
  HOME_SEARCH_AREA_BUTTON_BG,
  HOME_SEARCH_AREA_BUTTON_HOVER_BG,
  HOME_SEARCH_AREA_LABEL_COLOR,
} from "../../../../const/HomeConst";
import { useHomeVideoSearchWord } from "../../../../hooks/videolist/videoarea/result/useHomeVideoSearchWord";

// お気に入り登録済みを示す色（成功系のため、他の配色とは独立して管理する）
const REGISTERED_ICON_COLOR = "#43A047";

const SearchKeywordAreaDiv = styled.div`
  display:flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  color: white;
  box-sizing: border-box;
  padding: 0 5%;
  font-size: 13px;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    padding: 0 13%;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    padding: 0 13%;
    font-size: 17px;
  }

  @media (min-width: ${MEDIA.PC}) {
    padding: 0 13%;
    font-size: 17px;
  }
`;

const SearchKeywordDiv = styled.div`
  display:flex;
  align-items: center;
`;

const SearchKeywordLabelSpan = styled.span`
  color: ${HOME_SEARCH_AREA_LABEL_COLOR};
  margin-right: 6px;
`;

const RegisterdFavoriteAreaDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${HOME_SEARCH_AREA_LABEL_COLOR};

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    gap: 8px;
  }

  @media (min-width: ${MEDIA.PC}) {
    gap: 8px;
  }
`;

const FavoriteButtonDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 20px;
  background-color: ${HOME_SEARCH_AREA_BUTTON_BG};
  cursor: pointer;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${HOME_SEARCH_AREA_BUTTON_HOVER_BG};
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    gap: 8px;
    padding: 8px 16px;
  }

  @media (min-width: ${MEDIA.PC}) {
    gap: 8px;
    padding: 8px 16px;
  }
`;

type propsType = {
    searchKeyword: string,
}

export function HomeVideoSearchWord(props: propsType) {

    const {
        favoriteWordList,
        addFavoriteWord, } = useHomeVideoSearchWord();

    // 画面サイズ判定（PC未満はアイコンを一回り小さくする）
    const isPcLess = useMediaQuery(mediaQuery.pcLess);
    const iconSize = isPcLess ? "14px" : "17px";

    // お気に入りワード登録フラグ
    const isRegisterdFavoriteKeyword = favoriteWordList.some((e) => {
        return e === props.searchKeyword;
    });

    return (
        <React.Fragment>
            {
                props.searchKeyword &&
                <SearchKeywordAreaDiv>
                    <SearchKeywordDiv>
                        <SearchKeywordLabelSpan>
                            キーワード：
                        </SearchKeywordLabelSpan>
                        {props.searchKeyword}
                    </SearchKeywordDiv>
                    {
                        isRegisterdFavoriteKeyword
                            ?
                            <RegisterdFavoriteAreaDiv>
                                <IconComponent
                                    icon={FaCheck}
                                    size={iconSize}
                                    bgColor={REGISTERED_ICON_COLOR}
                                />
                                お気に入りワード登録済み
                            </RegisterdFavoriteAreaDiv>
                            :
                            <FavoriteButtonDiv
                                onClick={() => {
                                    addFavoriteWord(props.searchKeyword);
                                }}
                            >
                                <IconComponent
                                    icon={FaBookmark}
                                    size={iconSize}
                                    bgColor={HOME_SEARCH_AREA_ACCENT_COLOR}
                                />
                                {`このワードをお気に入りに登録（最大${FAVORITE_KEYWORD_MAX}つ）`}
                            </FavoriteButtonDiv>
                    }
                </SearchKeywordAreaDiv>
            }
        </React.Fragment>
    );
}
