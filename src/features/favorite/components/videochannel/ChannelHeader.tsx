import styled from "styled-components";
import { MEDIA } from "../../../../consts/MediaConst";
import { ChannelInfoType } from "../../types/videochannel/ChannelInfoType";

const Parent = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  box-sizing: border-box;
  padding-right: 13%;
  padding-left: 12%;
`;

const ChannelTitleSpan = styled.span`
  color:white;
  font-size: 17px;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: 17px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: 24px;
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: 24px;
  }
`;

const VideoImg = styled.img`
    border-radius: 50%;
    margin-right: 4%;
    width:19%;

    @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
      width:10%;
      margin-right: 2%;
    }

    @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
      width:10%;
      margin-right: 2%;
    }

    @media (min-width: ${MEDIA.PC}) {
      width:10%;
      margin-right: 2%;
    }
`;

type propsType = {
  channelInfo: ChannelInfoType
}

export function ChannelHeader(props: propsType) {

  console.log("ChannelHeader render");

  const channelInfo = props.channelInfo;
  const title = channelInfo.channelTitle;
  const channelIconUrl = channelInfo.channelIcons.high.url;

  return (
    <Parent>
      <VideoImg
        src={channelIconUrl}
      />
      <ChannelTitleSpan>
        {title}
      </ChannelTitleSpan>
    </Parent>
  );
}