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
import { VideoDetailItemType } from "../Type/VideoDetailItemType";
import { FLG } from "../../Common/Const/CommonConst";

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
    videoDetail: VideoDetailItemType | undefined,
}


export function HomeVideoDetailInfo(props: propsType) {

    console.log("HomeVideoDetailInfo render");

    const {
        addToFavorite,
        play,
        isLogin,
        moveLogin,
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
                                            "width": "90%",
                                            "background": "rgb(100, 100, 100)",
                                            "color": "white",
                                            "borderRadius": "0",
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
                                            "width": "90%",
                                            "background": "#ff9f00",
                                            "color": "white",
                                            "borderRadius": "0",
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
                                "width": "90%",
                                "background": "rgb(30, 90, 170)",
                                "color": "white",
                                "borderRadius": "0",
                            }}
                        />
                }
            </VideoMetaDiv>
        </VideoInfoDiv>
    );
}