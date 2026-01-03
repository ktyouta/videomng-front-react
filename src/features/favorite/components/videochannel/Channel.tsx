import { FaArrowLeft } from "react-icons/fa6";
import styled from "styled-components";
import { IconComponent } from "../../../../components/IconComponent";
import Loading from "../../../../components/Loading";
import { useChannel } from "../../hooks/videochannel/useChannel";
import { ChannelHeader } from "./ChannelHeader";
import { ChannelVideoArea } from "./ChannelVideoArea";


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

export function Channel() {

    console.log("Channel render");

    const {
        isLoading,
        errMessage,
        channelVideoListData,
        setNextPageToken,
        back, } = useChannel();

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
                onclick={back}
            />
            {/* ヘッダ */}
            <ChannelHeader
                channelInfo={channelVideoListData.channelInfo}
            />
            {/* 動画表示エリア */}
            <ChannelVideoArea
                videoListData={channelVideoListData}
                setNextPageToken={setNextPageToken}
                isLoading={isLoading}
            />
        </Parent>
    );
}