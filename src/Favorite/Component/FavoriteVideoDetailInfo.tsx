import React from "react";
import { useFavoriteVideoDetail } from "../Hook/useFavoriteVideoDetail";
import LoadingBase from "../../Common/Component/LoadingBase";
import styled from "styled-components";
import ButtonComponent from "../../Common/Component/ButtonComponent";
import { VideoUrlModel } from "../../Common/Model/VideoUrlModel";
import { YouTubeDataApiVideoDetailItemType } from "../Type/YouTubeDataApiVideoDetailItemType";
import { FavoriteVideoDetailDataType } from "../Type/FavoriteVideoDetailDataType";
import AccordionComponent from "../../Common/Component/AccordionComponent";
import { useFavoriteVideoDetailInfo } from "../Hook/useFavoriteVideoDetailInfo";
import { MdPlayArrow } from 'react-icons/md';
import { IconComponent } from "../../Common/Component/IconComponent";
import { ConfirmModalComponent } from "../../Common/Component/ConfirmModalComponent";

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
    videoDetail: FavoriteVideoDetailDataType | undefined,
}


export function FavoriteVideoDetailInfo(props: propsType) {

    console.log("FavoriteVideoDetailInfo render");

    const {
        clickDeleteFavoriteVide,
        play,
        isOpenModal,
        closeModal,
        executeDelete,
    } = useFavoriteVideoDetailInfo();

    const videoDetail = props.videoDetail;
    const item = videoDetail?.item;
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
                <ButtonComponent
                    styleTypeNumber="BASE"
                    title={"お気に入りから外す"}
                    onclick={clickDeleteFavoriteVide}
                    style={{
                        "fontSize": "0.9rem",
                        "height": "50px",
                        "width": "90%",
                        "background": "rgb(175, 55, 42)",
                        "color": "white",
                        "borderRadius": "0",
                    }}
                />
            </VideoMetaDiv>
            <ConfirmModalComponent
                isOpenModal={isOpenModal}
                closeModal={closeModal}
                titleMessage={`この動画をお気に入りから外してもよろしいですか？`}
                clickOk={executeDelete}
            />
        </VideoInfoDiv>
    );
}