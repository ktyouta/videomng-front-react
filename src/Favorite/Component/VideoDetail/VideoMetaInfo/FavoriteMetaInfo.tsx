import React from "react";
import { IconComponent } from "../../../../Common/Component/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import { FavoriteVideoMemoType } from "../../../Type/VideoDetail/VideoMemo/FavoriteVideoMemoType";
import { FavoriteMemoContent } from "../VideoMemo/FavoriteMemoContent";
import BaseTextbox from "../../../../Common/Component/BaseTextbox";
import { FaArrowUp } from "react-icons/fa";
import { FavoriteMemoCreateInput } from "../VideoMemo/FavoriteMemoCreateInput";
import { FavoriteMemoHeader } from "../VideoMemo/FavoriteMemoHeader";
import { FavoriteMemoList } from "../VideoMemo/FavoriteMemoList";
import { FavoriteCommentHeader } from "../VideoComment/FavoriteCommentHeader";
import { FavoriteCommentList } from "../VideoComment/FavoriteCommentList";
import { FavoriteVideoDetailDataType } from "../../../Type/VideoDetail/FavoriteVideoDetailDataType";
import { AccordionComponent } from "../../../../Common/Component/AccordionComponent";
import { formatDateJP } from "../../../../Common/Function/CommonFunction";


const ContentDiv = styled.div`
    color:white;
`;

const TitleDiv = styled.div`
  box-sizing:border-box;
  margin-bottom:1%;
`;

const MetaDiv = styled.div`
  box-sizing:border-box;
  margin-bottom: 34px;
`;

const StatisticsAreaDiv = styled.div`
  display: flex;
  margin-bottom: 34px;
  gap: 48px;
  flex-wrap: wrap;
`;

const StatisticsDiv = styled.div`
`;

const StatisticsDataDiv = styled.div`
`;

type propsType = {
    videoDetail: FavoriteVideoDetailDataType
}

export function FavoriteMetaInfo(props: propsType) {

    console.log("FavoriteMetaInfo render");

    const videoDetail = props.videoDetail;
    const item = videoDetail.item;
    // 動画基本情報
    const snippet = item.snippet;
    // タイトル
    const title = snippet.title;
    // チャンネル名
    const channelTitle = snippet.channelTitle;
    // 動画説明
    const description = snippet.description;
    // 動画統計情報
    const statistics = item.statistics;
    // 再生回数
    const viewCount = statistics?.viewCount;
    // 高評価数
    const likeCount = statistics?.likeCount;
    // 投稿日
    const publishedDate = formatDateJP(snippet.publishedAt);

    return (
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
            <StatisticsAreaDiv>
                <StatisticsDiv>
                    <TitleDiv>
                        【投稿日】
                    </TitleDiv>
                    <StatisticsDataDiv>
                        {publishedDate}
                    </StatisticsDataDiv>
                </StatisticsDiv>
                <StatisticsDiv>
                    <TitleDiv>
                        【再生回数】
                    </TitleDiv>
                    <StatisticsDataDiv>
                        {viewCount ? `${viewCount} 回` : ``}
                    </StatisticsDataDiv>
                </StatisticsDiv>
                <StatisticsDiv>
                    <TitleDiv>
                        【高評価数】
                    </TitleDiv>
                    <StatisticsDataDiv>
                        {likeCount}
                    </StatisticsDataDiv>
                </StatisticsDiv>
            </StatisticsAreaDiv>
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
                            borderRadius: "6px"
                        }}
                    >
                        {description}
                    </AccordionComponent>
                }
            </MetaDiv>
        </ContentDiv>
    );
}