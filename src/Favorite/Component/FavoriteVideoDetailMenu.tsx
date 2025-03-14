import React from "react";
import { useFavoriteVideoDetail } from "../Hook/useFavoriteVideoDetail";
import LoadingBase from "../../Common/Component/LoadingBase";
import styled from "styled-components";
import ButtonComponent from "../../Common/Component/ButtonComponent";
import { VideoUrlModel } from "../../Common/Model/VideoUrlModel";
import { FavoriteVideoDetailInfo } from "./FavoriteVideoDetailInfo";
import { YouTubeDataApiVideoDetailItemType } from "../Type/YouTubeDataApiVideoDetailItemType";
import { useFavoriteVideoDetailMenu } from "../Hook/useFavoriteVideoDetailMenu";
import { FavoriteVideoDetailDataType } from "../Type/FavoriteVideoDetailDataType";


const MenuParentDiv = styled.div`
  width: 34%;
  height: 675px;
  margin-left: 2%;
  margin-top: 1%;
  box-sizing:border-box;
`;

const MenuListDiv = styled.div`
  box-sizing:border-box;
  height: 70%;
  background-color: #181a1e;
  border-radius: 2%;
  border: solid 1px;
`;

const MenuButtonDiv = styled.div`
  box-sizing:border-box;
  padding:3%;
  button {
    margin-bottom: 3%;
  }
`;

type propsType = {
    videoDetail: FavoriteVideoDetailDataType | undefined,
    videoId: string
}


export function FavoriteVideoDetailMenu(props: propsType) {

    console.log("FavoriteVideoDetailMenu render");

    const videoDetail = props.videoDetail;
    // 動画ID
    const videoId = props.videoId;
    // 動画URL
    const videoUrlModel = new VideoUrlModel(videoId);

    return (
        <MenuParentDiv>
            <MenuListDiv>
                <MenuButtonDiv>
                    <ButtonComponent
                        styleTypeNumber="GRAD_GRAY"
                        title={"動画を視聴する"}
                        onclick={() => {
                            window.open(`${videoUrlModel.videoUrl}`, `_blank`);
                        }}
                        style={{
                            "fontSize": "0.9rem",
                            "height": "7%",
                            "width": "100%",
                        }}
                    />
                </MenuButtonDiv>
            </MenuListDiv>
        </MenuParentDiv>
    );
}