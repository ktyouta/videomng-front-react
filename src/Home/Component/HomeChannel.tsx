import React from "react";
import styled from "styled-components";
import { HomeChannelVideoArea } from "./HomeChannelVideoArea";
import { HomeChannelHeader } from "./HomeChannelHeader";
import { useHomeChannel } from "../Hook/useHomeChannel";
import LoadingBase from "../../Common/Component/LoadingBase";


const Parent = styled.div`
  width: 100%;
`;

const MessageDiv = styled.div`
  color:white;
  position: absolute;
  top: 32%;
  left: 42%;
`;

export function HomeChannel() {

    console.log("HomeChannel render");

    const {
        isLoading,
        errMessage,
        channelVideoListData,
        setNextPageToken, } = useHomeChannel();

    if (errMessage) {
        return (
            <MessageDiv>
                {errMessage}
            </MessageDiv>
        );
    }

    if (!channelVideoListData) {
        return (
            <React.Fragment></React.Fragment>
        );
    }

    return (
        <Parent>
            {
                isLoading &&
                <LoadingBase />
            }
            {/* ヘッダ */}
            <HomeChannelHeader
                channelInfo={channelVideoListData.channelInfo}
            />
            {/* 動画表示エリア */}
            <HomeChannelVideoArea
                videoListData={channelVideoListData}
                setNextPageToken={setNextPageToken}
            />
        </Parent>
    );
}