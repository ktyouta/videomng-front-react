import React from "react";
import styled from "styled-components";
import { useFavoriteVideoArea } from "../Hook/useFavoriteVideoArea";
import LoadingBase from "../../Common/Component/LoadingBase";
import { FavoriteVideoContent } from "./FavoriteVideoContent";
import { VideoListResponseType } from "../../Home/Type/VideoListResponseType";
import { FavoriteVideoListMergedType } from "../Type/FavoriteVideoListMergedType";
import { MEDIA } from "../../Common/Const/MediaConst";
import Loading from "../../Common/Component/Loading";

const Parent = styled.div`
  width: 100%;
`;

const LoadingParent = styled.div`
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%); 
`;

const VideoUl = styled.ul`
  display: grid;
  color: rgb(255, 255, 255);
  margin: 0px;
  padding: 4% 5% 0px;
  width: 100%;
  box-sizing: border-box;
  gap: 38px 4%;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));

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
  font-size: 12px;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: 15px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: 17px;
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: 17px;
  }
`;

export function FavoriteVideoArea() {

  console.log("FavoriteVideoArea render");

  const {
    videoListItem,
    isLoading,
    errMessage,
    isFetching,
    isCalledListApi, } = useFavoriteVideoArea();

  // ローディング
  if (!isCalledListApi) {
    return (
      <LoadingParent>
        <Loading />
      </LoadingParent>
    );
  }

  if (isLoading || isFetching) {
    return (
      <LoadingParent>
        <Loading />
      </LoadingParent>
    );
  }

  if (errMessage) {
    return (
      <MessageDiv>
        {errMessage}
      </MessageDiv>
    );
  }

  if (!videoListItem || videoListItem.length === 0) {
    return (
      <MessageDiv>
        お気に入り動画が存在しません。
      </MessageDiv>
    );
  }

  return (
    <Parent>
      <VideoUl>
        {
          videoListItem?.map((e: FavoriteVideoListMergedType) => {
            return (
              <FavoriteVideoContent
                data={e}
                key={e.videoId}
              />
            )
          })
        }
      </VideoUl>
    </Parent>
  );
}