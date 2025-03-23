import React from "react";
import LoadingBase from "../../Common/Component/LoadingBase";
import styled from "styled-components";
import ButtonComponent from "../../Common/Component/ButtonComponent";
import { VideoUrlModel } from "../../Common/Model/VideoUrlModel";
import { YouTubeDataApiVideoDetailItemType } from "../Type/YouTubeDataApiVideoDetailItemType";
import AccordionComponent from "../../Common/Component/AccordionComponent";
import { MdPlayArrow } from 'react-icons/md';
import { IconComponent } from "../../Common/Component/IconComponent";
import { useHomeVideoDetailInfo } from "../Hook/useHomeVideoDetailInfo";

const VideoInfoDiv = styled.div`
  width: 25%;
`;

const VideoImg = styled.img`
    width: 92%;
    height: 325px;
    border-radius: 6%;
`;

const VideoMetaDiv = styled.div`
    color:white;
`;

const VideoTitle = styled.h3`
`;

const BtnDiv = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
`;


type propsType = {
    videoDetail: YouTubeDataApiVideoDetailItemType | undefined,
    videoId: string
}


export function HomeVideoDetailInfo(props: propsType) {

    console.log("HomeVideoDetailInfo render");

    const {
        addToFavorite,
        play,
        isLogin,
    } = useHomeVideoDetailInfo({ ...props });

    const videoDetail = props.videoDetail;
    const item = videoDetail;
    const snippet = item?.snippet;
    // サムネイルURL
    const imgUrl = snippet?.thumbnails.high?.url;
    // タイトル
    const title = snippet?.title;

    return (
        <VideoInfoDiv>
            <VideoImg
                src={imgUrl}
            />
            <VideoMetaDiv>
                <VideoTitle>
                    {title}
                </VideoTitle>
                <ButtonComponent
                    styleTypeNumber="BASE"
                    title={
                        <BtnDiv>
                            <IconComponent
                                icon={MdPlayArrow}
                                size="10%"
                            />
                            再生
                        </BtnDiv>
                    }
                    onclick={play}
                    style={{
                        "fontSize": "0.9rem",
                        "height": "50px",
                        "width": "90%",
                        "background": "rgb(34, 139, 84)",
                        "color": "white",
                        "borderRadius": "0",
                        "marginBottom": "10%",
                    }}
                />
                {
                    isLogin &&
                    <ButtonComponent
                        styleTypeNumber="BASE"
                        title={"お気に入りに登録する"}
                        onclick={addToFavorite}
                        style={{
                            "fontSize": "0.9rem",
                            "height": "50px",
                            "width": "90%",
                            "background": "#ff9f00",
                            "color": "white",
                            "borderRadius": "0",
                        }}
                    />
                }
            </VideoMetaDiv>
        </VideoInfoDiv>
    );
}