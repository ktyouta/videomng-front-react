import React from "react";
import styled from "styled-components";
import { useHomeVideoArea } from "../Hook/useHomeVideoArea";
import LoadingBase from "../../Common/Component/LoadingBase";
import { YouTubeDataApiVideoListItemType } from "../Type/YouTubeDataApiVideoListItemType";
import { HomeVideoContent } from "./HomeVideoContent";
import ButtonComponent from "../../Common/Component/ButtonComponent";
import { VideoListItemType } from "../Type/VideoListItemType";
import { useHomeChannelVideoArea } from "../Hook/useHomeChannelVideoArea";
import { HomeChannelVideoContent } from "./HomeChannelVideoContent";

const Parent = styled.div`
  width: 100%;
  height: 90%;
`;

const VideoUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(182px, 1fr));
  color: rgb(255, 255, 255);
  margin: 0px;
  padding: 4% 5% 0px;
  width: 100%;
  box-sizing: border-box;
  gap: 38px 4%;
`;

const MessageDiv = styled.div`
  color:white;
  position: absolute;
  top: 32%;
  left: 42%;
`;

const NextGetBtnAreaDiv = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  width:100%;
  box-sizing: border-box;
  margin-top: 3%;
`;

export function HomeChannelVideoArea() {

    console.log("HomeChannelVideoArea render");

    const {
        videoListData,
        isLoading,
        errMessage, } = useHomeChannelVideoArea();

    if (!videoListData) {
        return (
            <LoadingBase />
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

    if (videoListItems.length === 0) {
        return (
            <MessageDiv>
                動画が存在しません。
            </MessageDiv>
        );
    }

    return (
        <Parent>
            {
                isLoading &&
                <LoadingBase />
            }
            <VideoUl>
                {
                    videoListItems?.map((e: VideoListItemType) => {
                        return (
                            <HomeChannelVideoContent
                                data={e}
                                key={e.id.videoId}
                            />
                        )
                    })
                }
            </VideoUl>
            {/* {
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
            } */}
        </Parent>
    );
}