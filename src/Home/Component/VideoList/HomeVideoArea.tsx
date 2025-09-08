import React from "react";
import styled from "styled-components";
import { useHomeVideoArea } from "../../Hook/VideoList/useHomeVideoArea";
import { HomeVideoAreaDefault } from "./HomeVideoAreaDefault";
import Loading from "../../../Common/Component/Loading";
import { HomeVideoListResult } from "./HomeVideoListResult";
import { HomeVideoSearchWord } from "./HomeVideoSearchWord";


const Parent = styled.div`
  width: 100%;
  height: 90%;
  padding-top: 3%;
`;

const LoadingParent = styled.div`
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%); 
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


export function HomeVideoArea() {

  console.log("HomeVideoArea render");

  const {
    videoListData,
    isLoading,
    errMessage,
    nowSearchCondition,
    isFetching } = useHomeVideoArea();

  // 初回検索ローディング
  if (!nowSearchCondition.nextPageToken && (isLoading || isFetching)) {
    return (
      <LoadingParent>
        <Loading />
      </LoadingParent>
    );
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

  if (videoListItems.length === 0) {
    return (
      <MessageDiv>
        検索結果が存在しません。
      </MessageDiv>
    );
  }

  return (
    <Parent>
      {/* 検索ワード */}
      <HomeVideoSearchWord
        searchKeyword={nowSearchCondition.keyword}
      />
      {/* 動画検索結果 */}
      <HomeVideoListResult
        videoListData={videoListData}
        isLoading={isLoading}
      />
    </Parent>
  );
}