import React from "react";
import styled from "styled-components";
import { HomeChannelVideoArea } from "./HomeChannelVideoArea";
import { HomeChannelHeader } from "./HomeChannelHeader";
import { useHomeChannel } from "../../hooks/videochannel/useHomeChannel";
import LoadingBase from "../../../../components/LoadingBase";
import { BackToListIcon } from "../../../../components/BackToListIcon";
import Loading from "../../../../components/Loading";
import { mediaQuery, useMediaQuery } from "../../../../hooks/useMediaQuery";

// 戻る矢印の縦位置（モバイル/それ以外）
const BACK_ICON_TOP_MOBILE = "70px";
const BACK_ICON_TOP_DEFAULT = "135px";

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

    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);

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
            <BackToListIcon
                onClick={backHome}
                style={{
                    "position": "fixed",
                    "top": isMobile ? BACK_ICON_TOP_MOBILE : BACK_ICON_TOP_DEFAULT,
                    "left": "3%",
                }}
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