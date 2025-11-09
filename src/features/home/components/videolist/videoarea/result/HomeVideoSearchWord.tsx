import styled from "styled-components";
import { useHomeVideoListResult } from "../../../../hooks/videolist/videoarea/result/useHomeVideoListResult";
import { VideoListDataType } from "../../../../types/videolist/VideoListDataType";
import { nowSearchConditionType } from "../../../HomeVideoNowSearchConditionValueProvider";
import React from "react";
import { FAVORITE_KEYWORD_MAX } from "../../../../const/HomeConst";
import { VideoListItemType } from "../../../../types/videolist/VideoListItemType";
import { HomeVideoContent } from "./HomeVideoContent";
import { MEDIA } from "../../../../../../consts/MediaConst";
import { IconComponent } from "../../../../../../components/IconComponent";
import Loading from "../../../../../../components/Loading";
import ButtonComponent from "../../../../../../components/ButtonComponent";
import { FaCheck } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { useHomeVideoSearchWord } from "../../../../hooks/videolist/videoarea/result/useHomeVideoSearchWord";


const SearchKeywordAreaDiv = styled.div`
  display:flex;
  align-items: center;
  color: white;
  box-sizing: border-box;
  padding-left: 8%;

  font-size: 12px;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: 12px;
    padding-left: 20%;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: 15px;
    padding-left: 24%;
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: 15px;
    padding-left: 24%;
  }
`;

const SearchKeywordDiv = styled.div`
  display:flex;
  align-items: center;
  margin-right: 1%;
`;

const SearchKeywordFavoriteIconDiv = styled.div`
  width: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchKeywordFavoriteTitleSpan = styled.span`
    cursor: pointer;
`;

const RegisterdFavoriteIconDiv = styled.div`
  width: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RegisterdFavoriteTitleSpan = styled.span`
  color: rgb(158, 158, 158);
`;

type propsType = {
    searchKeyword: string,
}

export function HomeVideoSearchWord(props: propsType) {

    const {
        favoriteWordList,
        addFavoriteWord, } = useHomeVideoSearchWord();

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
                        キーワード：{props.searchKeyword}
                    </SearchKeywordDiv>
                    {
                        isRegisterdFavoriteKeyword
                            ?
                            <React.Fragment>
                                <RegisterdFavoriteIconDiv>
                                    <IconComponent
                                        icon={FaCheck}
                                        size="30%"
                                        style={{
                                            color: `rgb(158, 158, 158)`
                                        }}
                                    />
                                </RegisterdFavoriteIconDiv>
                                <RegisterdFavoriteTitleSpan>
                                    お気に入りワード登録済み
                                </RegisterdFavoriteTitleSpan>
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <SearchKeywordFavoriteIconDiv>
                                    <IconComponent
                                        icon={FaBookmark}
                                        onclick={() => {
                                            addFavoriteWord(props.searchKeyword);
                                        }}
                                        size="30%"
                                        style={{
                                            color: `#1E90FF`
                                        }}
                                    />
                                </SearchKeywordFavoriteIconDiv>
                                <SearchKeywordFavoriteTitleSpan
                                    onClick={() => {
                                        addFavoriteWord(props.searchKeyword);
                                    }}
                                >
                                    {`このワードをお気に入りに登録（最大${FAVORITE_KEYWORD_MAX}つ）`}
                                </SearchKeywordFavoriteTitleSpan>
                            </React.Fragment>
                    }
                </SearchKeywordAreaDiv>
            }
        </React.Fragment>
    );
}