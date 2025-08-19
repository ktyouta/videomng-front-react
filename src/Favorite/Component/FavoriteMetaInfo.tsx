import React from "react";
import { IconComponent } from "../../Common/Component/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import { FavoriteVideoMemoType } from "../Type/FavoriteVideoMemoType";
import { FavoriteMemoContent } from "./FavoriteMemoContent";
import BaseTextbox from "../../Common/Component/BaseTextbox";
import { FaArrowUp } from "react-icons/fa";
import { FavoriteMemoCreateInput } from "./FavoriteMemoCreateInput";
import { FavoriteMemoHeader } from "./FavoriteMemoHeader";
import { FavoriteMemoList } from "./FavoriteMemoList";
import { FavoriteCommentHeader } from "./FavoriteCommentHeader";
import { FavoriteCommentList } from "./FavoriteCommentList";
import { FavoriteVideoDetailDataType } from "../Type/FavoriteVideoDetailDataType";
import AccordionComponent from "../../Common/Component/AccordionComponent";


const Parent = styled.div`
  box-sizing:border-box;
  min-height: 502px;
  background-color: #181a1e;
  border-radius: 1%;
  border: solid 1px;
  padding: 19px;
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
  margin-bottom: 37px;
`;


type propsType = {
    videoDetail: FavoriteVideoDetailDataType | undefined,
}

export function FavoriteMetaInfo(props: propsType) {

    console.log("FavoriteMetaInfo render");

    const videoDetail = props.videoDetail;
    const item = videoDetail?.item;
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
                    {
                        description &&
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
                    }
                </MetaDiv>
            </ContentDiv>
        </Parent>
    );
}