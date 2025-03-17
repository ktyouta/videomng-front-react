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
import ModalComponent from "../../Common/Component/ModalComponent";
import { IconComponent } from "../../Common/Component/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import { FavoriteMemo } from "./FavoriteMemo";
import { Z_INDEX_PARAM } from "../../Common/Const/CommonConst";


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

// モーダルオープン時の背景のスタイル
const OverlayDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.9;
`;

type propsType = {
    videoDetail: FavoriteVideoDetailDataType | undefined,
    videoId: string
}


export function FavoriteVideoDetailMenu(props: propsType) {

    console.log("FavoriteVideoDetailMenu render");

    const {
        isModalOpen,
        openModel,
        closeModal,
    } = useFavoriteVideoDetailMenu();

    const videoDetail = props.videoDetail;
    // 動画ID
    const videoId = props.videoId;
    // 動画URL
    const videoUrlModel = new VideoUrlModel(videoId);

    return (
        <React.Fragment>
            <MenuParentDiv>
                <MenuListDiv>
                    <MenuButtonDiv>
                        <ButtonComponent
                            styleTypeNumber="GRAD_GRAY"
                            title={"再生"}
                            onclick={() => {
                                window.open(`${videoUrlModel.videoUrl}`, `_blank`);
                            }}
                            style={{
                                "fontSize": "0.9rem",
                                "height": "7%",
                                "width": "100%",
                            }}
                        />
                        <ButtonComponent
                            styleTypeNumber="GRAD_GRAY"
                            title={"メモ"}
                            onclick={() => {
                                openModel();
                            }}
                            style={{
                                "fontSize": "0.9rem",
                                "height": "7%",
                                "width": "100%",
                            }}
                        />
                        <ButtonComponent
                            styleTypeNumber="GRAD_GRAY"
                            title={"キーワード検索(字幕)"}
                            onclick={() => {
                                alert(`実装中です。`);
                            }}
                            style={{
                                "fontSize": "0.9rem",
                                "height": "7%",
                                "width": "100%",
                            }}
                        />
                        <ButtonComponent
                            styleTypeNumber="GRAD_GRAY"
                            title={"キーワード検索(コメント)"}
                            onclick={() => {
                                alert(`実装中です。`);
                            }}
                            style={{
                                "fontSize": "0.9rem",
                                "height": "7%",
                                "width": "100%",
                            }}
                        />
                        <ButtonComponent
                            styleTypeNumber="GRAD_GRAY"
                            title={"公開コメント"}
                            onclick={() => {
                                alert(`実装中です。`);
                            }}
                            style={{
                                "fontSize": "0.9rem",
                                "height": "7%",
                                "width": "100%",
                            }}
                        />
                        <ButtonComponent
                            styleTypeNumber="GRAD_GRAY"
                            title={"お気に入りから外す"}
                            onclick={() => {
                                alert(`実装中です。`);
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
            <ModalComponent
                modalIsOpen={isModalOpen}
                closeModal={closeModal}
                style={{
                    backgroundColor: "#00050d", zIndex: `${Z_INDEX_PARAM.MODAL}`,
                }}
            >
                <FavoriteMemo
                    closeModal={closeModal}
                    videoId={videoId}
                />
            </ModalComponent>
            {
                isModalOpen &&
                <OverlayDiv />
            }
        </React.Fragment>
    );
}