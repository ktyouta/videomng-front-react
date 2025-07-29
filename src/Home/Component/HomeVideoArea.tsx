import React from "react";
import styled from "styled-components";
import { useHomeVideoArea } from "../Hook/useHomeVideoArea";
import LoadingBase from "../../Common/Component/LoadingBase";
import { YouTubeDataApiVideoListItemType } from "../Type/YouTubeDataApiVideoListItemType";
import { HomeVideoContent } from "./HomeVideoContent";
import ButtonComponent from "../../Common/Component/ButtonComponent";
import { VideoListItemType } from "../Type/VideoListItemType";
import { HomeRecentKeywod } from "./HomeRecentKeywod";
import { HomeFrequentKeywords } from "./HomeFrequentKeywords";
import { IconComponent } from "../../Common/Component/IconComponent";
import { FaStar } from "react-icons/fa";
import { HomeFavoriteKeywords } from "./HomeFavoriteKeywords";
import { FAVORITE_KEYWORD_MAX } from "../Const/HomeConst";
import { HomeVideoAreaDefault } from "./HomeVideoAreaDefault";
import { FaCheck } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { MEDIA } from "../../Common/Const/MediaConst";


const Parent = styled.div`
  width: 100%;
  height: 90%;
  padding-top: 3%;
`;

const LoadingParent = styled(Parent)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const VideoUl = styled.ul`
  display: grid;
  color: rgb(255, 255, 255);
  margin: 0px;
  padding: 2% 5% 0px;
  width: 100%;
  box-sizing: border-box;
  gap: 38px 4%;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  box-sizing: border-box;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  @media (min-width: ${MEDIA.PC}) {
    grid-template-columns: repeat(auto-fill, minmax(228px, 1fr));
  }
`;

const MessageDiv = styled.div`
  color:white;
  display:flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin-top: 5%;
  font-size: 17px;
`;

const NextGetBtnAreaDiv = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  width:100%;
  box-sizing: border-box;
  margin-top: 3%;
`;

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

export function HomeVideoArea() {

  console.log("HomeVideoArea render");

  const {
    videoListData,
    isLoading,
    clickShowMore,
    errMessage,
    showMoreData,
    addFavoriteWord,
    favoriteWordList } = useHomeVideoArea();

  // 初回検索ローディング
  if (!showMoreData && isLoading) {
    return <LoadingBase />;
  }

  // 初期表示
  if (!videoListData) {
    return (
      <HomeVideoAreaDefault />
    );
  }

  if (errMessage) {
    return (
      <MessageDiv>
        {errMessage}
      </MessageDiv>
    );
  }

  // 動画リスト
  const videoListItems = videoListData.items;
  // 次データ取得用トークン
  const nextPageToken = videoListData.nextPageToken;
  // 検索ワード
  const searchKeyword = showMoreData?.keyword;
  // お気に入りワード登録フラグ
  const isRegisterdFavoriteKeyword = favoriteWordList.some((e) => {
    return e === searchKeyword;
  });

  if (videoListItems.length === 0) {
    return (
      <MessageDiv>
        検索結果が存在しません。
      </MessageDiv>
    );
  }

  return (
    <Parent>
      {
        showMoreData?.keyword &&
        <SearchKeywordAreaDiv>
          <SearchKeywordDiv>
            キーワード：{showMoreData.keyword}
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
                      addFavoriteWord(showMoreData.keyword);
                    }}
                    size="30%"
                    style={{
                      color: `#1E90FF`
                    }}
                  />
                </SearchKeywordFavoriteIconDiv>
                <SearchKeywordFavoriteTitleSpan>
                  {`このワードをお気に入りに登録（最大${FAVORITE_KEYWORD_MAX}つ）`}
                </SearchKeywordFavoriteTitleSpan>
              </React.Fragment>
          }
        </SearchKeywordAreaDiv>
      }
      {
        isLoading &&
        <LoadingBase />
      }
      <VideoUl>
        {
          videoListItems?.map((e: VideoListItemType) => {
            return (
              <HomeVideoContent
                data={e}
                key={e.id.videoId}
              />
            )
          })
        }
      </VideoUl>
      {
        nextPageToken &&
        <NextGetBtnAreaDiv>
          <ButtonComponent
            styleTypeNumber="GRAD_GRAY"
            title={"もっと見る"}
            onclick={() => {
              clickShowMore(nextPageToken);
            }}
            style={{
              "fontSize": "0.9rem",
              "height": "7%",
            }}
          />
        </NextGetBtnAreaDiv>
      }
    </Parent>
  );
}