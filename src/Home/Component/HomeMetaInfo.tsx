import React from "react";
import { IconComponent } from "../../Common/Component/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import AccordionComponent from "../../Common/Component/AccordionComponent";
import { YouTubeDataApiVideoDetailItemType } from "../Type/YouTubeDataApiVideoDetailItemType";


const Parent = styled.div`
  box-sizing:border-box;
  min-height: 502px;
  background-color: #181a1e;
  border-radius: 1%;
  border: solid 1px;
  padding:2%;
`;

const ContentDiv = styled.div`
    color:white;
`;

const TitleDiv = styled.div`
  box-sizing:border-box;
  margin-bottom:1%;
`;

const MetaDiv = styled.div`
  box-sizing:border-box;
  margin-bottom:4%;
`;


type propsType = {
    videoId: string,
    videoDetail: YouTubeDataApiVideoDetailItemType | undefined,
}

export function HomeMetaInfo(props: propsType) {

    console.log("HomeMetaInfo render");

    const videoDetail = props.videoDetail;
    const item = videoDetail;
    // 動画基本情報
    const snippet = item?.snippet;
    // タイトル
    const title = snippet?.title;
    // チャンネル名
    const channelTitle = snippet?.channelTitle;
    // 動画説明
    const description = snippet?.description;
    // 動画統計情報
    const statistics = item?.statistics;
    // 再生回数
    const viewCount = statistics?.viewCount;
    // 高評価数
    const likeCount = statistics?.likeCount;

    return (
        <Parent>
            <ContentDiv>
                <TitleDiv>
                    【タイトル】
                </TitleDiv>
                <MetaDiv>
                    {title}
                </MetaDiv>
                <TitleDiv>
                    【チャンネル】
                </TitleDiv>
                <MetaDiv>
                    {channelTitle}
                </MetaDiv>
                <TitleDiv>
                    【再生回数】
                </TitleDiv>
                <MetaDiv>
                    {viewCount ? `${viewCount} 回` : ``}
                </MetaDiv>
                <TitleDiv>
                    【高評価数】
                </TitleDiv>
                <MetaDiv>
                    {likeCount}
                </MetaDiv>
                <TitleDiv>
                    【動画説明】
                </TitleDiv>
                <MetaDiv>
                    <AccordionComponent
                        defaultHeight={'70px'}
                        outerStyle={{
                            border: "solid 1px",
                            boxSizing: "border-box",
                            padding: "1%",
                            borderRadius: "6px"
                        }}
                    >
                        {description}
                    </AccordionComponent>
                </MetaDiv>
            </ContentDiv>
        </Parent>
    );
}