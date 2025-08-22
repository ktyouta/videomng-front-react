import React from "react";
import styled from "styled-components";
import { HomeChannelVideoArea } from "./HomeChannelVideoArea";
import { HomeChannelHeader } from "./HomeChannelHeader";
import { useHomeChannel } from "../../Hook/VideoChannel/useHomeChannel";
import LoadingBase from "../../../Common/Component/LoadingBase";
import { FaArrowLeft } from "react-icons/fa6";
import { IconComponent } from "../../../Common/Component/IconComponent";
import Loading from "../../../Common/Component/Loading";


const Parent = styled.div`
  width: 100%;
`;

const LoadingParent = styled.div`
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%); 
  z-index: 10;
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

export function HomeChannel() {

    console.log("HomeChannel render");

    const {
        isLoading,
        errMessage,
        channelVideoListData,
        setNextPageToken,
        backHome, } = useHomeChannel();

    if (errMessage) {
        return (
            <MessageDiv>
                {errMessage}
            </MessageDiv>
        );
    }

    if (!channelVideoListData) {
        return (
            <LoadingParent>
                <Loading />
            </LoadingParent>
        );
    }

    return (
        <Parent>
            <IconComponent
                icon={FaArrowLeft}
                size="20"
                style={{
                    "color": "white",
                    "position": "absolute",
                    "top": "18%",
                    "left": "3%",
                }}
                onclick={backHome}
            />
            {/* ヘッダ */}
            <HomeChannelHeader
                channelInfo={channelVideoListData.channelInfo}
            />
            {/* 動画表示エリア */}
            <HomeChannelVideoArea
                videoListData={channelVideoListData}
                setNextPageToken={setNextPageToken}
                isLoading={isLoading}
            />
        </Parent>
    );
}