import React from "react";
import { MdPlayArrow } from 'react-icons/md';
import styled from "styled-components";
import ButtonComponent from "../../../../../components/ButtonComponent";
import { IconComponent } from "../../../../../components/IconComponent";
import { FLG } from "../../../../../consts/CommonConst";
import { MEDIA } from "../../../../../consts/MediaConst";
import { VideoDetailItemType } from "../../../../../types/videodetail/VideoDetailItemType";
import { useVideoDetailInfo } from "../../../hooks/videochannel/videodetail/useVideoDetailInfo";

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


export function VideoDetailInfo(props: propsType) {

    console.log("VideoDetailInfo render");

    const {
        addToFavorite,
        play,
        isLogin,
        moveLogin,
    } = useVideoDetailInfo();

    const videoDetail = props.videoDetail;
    const snippet = videoDetail?.snippet;
    // サムネイルURL
    const imgUrl = snippet?.thumbnails.high?.url;
    // タイトル
    const title = snippet?.title;
    // お気に入りフラグ
    const favoriteFlg = videoDetail?.favoriteFlg;

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
                    variant="green"
                    onClick={play}
                    style={{
                        "fontSize": "0.9rem",
                        "height": "50px",
                        "width": "100%",
                        "color": "white",
                        "borderRadius": "8px",
                        "marginBottom": "8%",
                        "display": "flex",
                        "alignItems": "center",
                        "justifyContent": "center",
                    }}
                >
                    <BtnDiv>
                        <IconComponent
                            icon={MdPlayArrow}
                            size="10%"
                        />
                        再生
                    </BtnDiv>
                </ButtonComponent>
                {
                    isLogin ?
                        <React.Fragment>
                            {
                                favoriteFlg === FLG.ON
                                    ?
                                    // お気に入り登録済み
                                    <ButtonComponent
                                        style={{
                                            "fontSize": "0.9rem",
                                            "minHeight": "50px",
                                            "width": "100%",
                                            "background": "rgb(100, 100, 100)",
                                            "color": "white",
                                            "borderRadius": "8px",
                                            "display": "block",
                                        }}
                                    >
                                        お気に入り登録済み
                                    </ButtonComponent>
                                    :
                                    // お気に入り未登録
                                    <ButtonComponent
                                        variant="orange"
                                        onClick={addToFavorite}
                                        style={{
                                            "fontSize": "0.9rem",
                                            "minHeight": "50px",
                                            "width": "100%",
                                            "borderRadius": "8px",
                                            "display": "block",
                                        }}
                                    >
                                        お気に入りに登録する
                                    </ButtonComponent>
                            }
                        </React.Fragment>
                        :
                        // ログイン画面遷移ボタン
                        <ButtonComponent
                            variant="blue"
                            onClick={moveLogin}
                            style={{
                                "fontSize": "0.9rem",
                                "minHeight": "50px",
                                "width": "100%",
                                "borderRadius": "8px",
                                "display": "block",
                            }}
                        >
                            ログインしてお気に入りに登録
                        </ButtonComponent>
                }
            </VideoMetaDiv>
        </VideoInfoDiv>
    );
}