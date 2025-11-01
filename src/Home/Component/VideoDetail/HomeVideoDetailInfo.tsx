import React from "react";
import LoadingBase from "../../../Common/Component/LoadingBase";
import styled from "styled-components";
import ButtonComponent from "../../../Common/Component/ButtonComponent";
import { YouTubeDataApiVideoDetailItemType } from "../../Type/VideoDetail/YouTubeDataApiVideoDetailItemType";
import { MdPlayArrow } from 'react-icons/md';
import { IconComponent } from "../../../Common/Component/IconComponent";
import { useHomeVideoDetailInfo } from "../../Hook/VideoDetail/useHomeVideoDetailInfo";
import { VideoDetailItemType } from "../../Type/VideoDetail/VideoDetailItemType";
import { FLG } from "../../../Common/Const/CommonConst";
import { MEDIA } from "../../../Common/Const/MediaConst";

const VideoInfoDiv = styled.div`
  width: 95%;
  padding-top: 3%;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    width: 95%;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    width: 25%;
  }

  @media (min-width: ${MEDIA.PC}) {
    width: 25%;
  }
`;

const VideoImg = styled.img`
    width: 100%;
    border-radius: 6%;
`;

const VideoMetaDiv = styled.div`
    color:white;
`;

const VideoTitle = styled.h3`
  margin-bottom: 9%;
  font-size: 15px;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: 15px;
    margin-bottom: 14%;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: 15px;
    margin-bottom: 14%;
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: 16px;
    margin-bottom: 14%;
  }
`;

const BtnDiv = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
`;


type propsType = {
    videoDetail: VideoDetailItemType,
}


export function HomeVideoDetailInfo(props: propsType) {

    console.log("HomeVideoDetailInfo render");

    const {
        addToFavorite,
        play,
        isLogin,
        moveLogin,
        isMobile,
    } = useHomeVideoDetailInfo();

    const videoDetail = props.videoDetail;
    const item = videoDetail;
    const snippet = item?.snippet;
    // サムネイルURL
    const imgUrl = snippet?.thumbnails.high?.url;
    // タイトル
    const title = snippet?.title;
    // お気に入りフラグ
    const favoriteFlg = item?.favoriteFlg;
    // ボタン幅
    const buttonWidth = isMobile ? "50%" : "90%";

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
                        "width": `${buttonWidth}`,
                        "background": "rgb(34, 139, 84)",
                        "color": "white",
                        "borderRadius": "8px",
                        "marginBottom": isMobile ? "7%" : "10%",
                        "display": "block",
                    }}
                />
                {
                    isLogin ?
                        <React.Fragment>
                            {
                                favoriteFlg === FLG.ON
                                    ?
                                    // お気に入り登録済み
                                    <ButtonComponent
                                        styleTypeNumber="BASE"
                                        title={"お気に入り登録済み"}
                                        onclick={() => { }}
                                        style={{
                                            "fontSize": "0.9rem",
                                            "height": "50px",
                                            "width": `${buttonWidth}`,
                                            "background": "rgb(100, 100, 100)",
                                            "color": "white",
                                            "borderRadius": "8px",
                                            "display": "block",
                                        }}
                                    />
                                    :
                                    // お気に入り未登録
                                    <ButtonComponent
                                        styleTypeNumber="BASE"
                                        title={"お気に入りに登録する"}
                                        onclick={addToFavorite}
                                        style={{
                                            "fontSize": "0.9rem",
                                            "height": "50px",
                                            "width": `${buttonWidth}`,
                                            "background": "#ff9f00",
                                            "color": "white",
                                            "borderRadius": "8px",
                                            "display": "block",
                                        }}
                                    />
                            }
                        </React.Fragment>
                        :
                        // ログイン画面遷移ボタン
                        <ButtonComponent
                            styleTypeNumber="BASE"
                            title={"ログインしてお気に入りに登録"}
                            onclick={moveLogin}
                            style={{
                                "fontSize": "0.9rem",
                                "height": "50px",
                                "width": `${buttonWidth}`,
                                "background": "rgb(30, 90, 170)",
                                "color": "white",
                                "borderRadius": "8px",
                                "display": "block",
                            }}
                        />
                }
            </VideoMetaDiv>
        </VideoInfoDiv>
    );
}