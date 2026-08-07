import React from "react";
import { FaRegStar, FaStar } from 'react-icons/fa';
import { MdLogin, MdPlayArrow } from 'react-icons/md';
import styled from "styled-components";
import { IconComponent } from "../../../../../components/IconComponent";
import { BUTTON_HOVER_ACCENT_COLOR, BUTTON_HOVER_BG_COLOR, THUMBNAIL_ICON_CIRCLE_BG_COLOR } from "../../../../../consts/ButtonInteractionConst";
import { FLG } from "../../../../../consts/CommonConst";
import { MEDIA } from "../../../../../consts/MediaConst";
import { mediaQuery, useMediaQuery } from "../../../../../hooks/useMediaQuery";
import { VideoDetailItemType } from "../../../../../types/videodetail/VideoDetailItemType";
import { useVideoDetailInfo } from "../../../hooks/videochannel/videodetail/useVideoDetailInfo";
import { VideoDetailTagFolderSelect } from "./VideoDetailTagFolderSelect";

const VideoInfoDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    width: 25%;
    padding-top: 3%;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    width: 40%;
    padding-top: 3%;
  }

  @media (min-width: ${MEDIA.PC}) {
    width: 25%;
    padding-top: 3%;
  }
`;

const ThumbnailWrapperDiv = styled.div`
    position: relative;
    width: 100%;
`;

const VideoImg = styled.img`
    width: 100%;
    display: block;
    border-radius: 6%;
`;

const IconBtnAreaDiv = styled.div`
    position: absolute;
    top: 4px;
    right: -3px;
    display: flex;
    gap: 6px;
`;

const IconBadgeButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    box-sizing: border-box;
    border: none;
    border-radius: 50%;
    background-color: ${THUMBNAIL_ICON_CIRCLE_BG_COLOR};
    cursor: pointer;
    padding: 0;
`;

const VideoMetaDiv = styled.div`
    color:white;
`;

const VideoTitle = styled.h3`
  margin-bottom: 1px;
  margin-top: 1px;
  font-size: 12px;

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

const ButtonPanelDiv = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 14px;
    border-radius: 12px;
    background-color: #1c1f26;
    border: 1px solid #3a3f4b;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
    margin-bottom: 8%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;

const LabelSpan = styled.span`
  color: white;
  font-size: 12px;
  transition: color 0.15s ease;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: 12px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: 14px;
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: 14px;
  }
`;

const ChipButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    height: 45px;
    padding: 0 14px;
    box-sizing: border-box;
    border: none;
    border-radius: 8px;
    background: #3a3d42;
    color: white;
    font-size: 14px;
    white-space: nowrap;
    cursor: pointer;
    transition: filter 0.15s ease;
    flex: 1;

    &:hover {
      background-color: ${BUTTON_HOVER_BG_COLOR};
      transform: translateY(-1px);
    }

    &:hover ${LabelSpan} {
      color: ${BUTTON_HOVER_ACCENT_COLOR};
    }
`;


type propsType = {
    videoDetail: VideoDetailItemType,
}


export function VideoDetailInfo(props: propsType) {

    console.log("VideoDetailInfo render");

    const {
        clickRegister,
        play,
        isLogin,
        moveLogin,
        isOpenTagSelectModal,
        closeTagSelectModal,
        isMobile,
    } = useVideoDetailInfo();

    const videoDetail = props.videoDetail;
    const snippet = videoDetail?.snippet;
    // サムネイルURL
    const imgUrl = snippet?.thumbnails.high?.url;
    // タイトル
    const title = snippet?.title;
    // お気に入りフラグ
    const favoriteFlg = videoDetail?.favoriteFlg;
    // タブレット・PC幅判定(ボタンの出し分け用。isMobileは768px幅をタブレットと重複して判定するため使わない)
    const isTablet = useMediaQuery(mediaQuery.tablet);
    const isPc = useMediaQuery(mediaQuery.pc);
    const isTabletOrPc = isTablet || isPc;

    return (
        <VideoInfoDiv>
            <ThumbnailWrapperDiv>
                <VideoImg
                    src={imgUrl}
                />
                {
                    !isTabletOrPc &&
                    <IconBtnAreaDiv>
                        {
                            isLogin ?
                                <React.Fragment>
                                    {
                                        favoriteFlg === FLG.ON
                                            ?
                                            // お気に入り登録済み
                                            <IconBadgeButton>
                                                <IconComponent
                                                    icon={FaStar}
                                                    size="16px"
                                                    style={{ color: "yellow" }}
                                                />
                                            </IconBadgeButton>
                                            :
                                            // お気に入り未登録
                                            <IconBadgeButton
                                                onClick={clickRegister}
                                            >
                                                <IconComponent
                                                    icon={FaRegStar}
                                                    size="16px"
                                                    style={{ color: "white" }}
                                                />
                                            </IconBadgeButton>
                                    }
                                </React.Fragment>
                                :
                                // ログイン画面遷移ボタン
                                <IconBadgeButton
                                    onClick={moveLogin}
                                >
                                    <IconComponent
                                        icon={MdLogin}
                                        size="16px"
                                        style={{ color: "white" }}
                                    />
                                </IconBadgeButton>
                        }
                    </IconBtnAreaDiv>
                }
            </ThumbnailWrapperDiv>
            <VideoMetaDiv>
                <VideoTitle>
                    {title}
                </VideoTitle>
                {
                    isTabletOrPc &&
                    <ButtonPanelDiv>
                        <ChipButton
                            onClick={play}
                        >
                            <IconComponent
                                icon={MdPlayArrow}
                                size="16px"
                            />
                            <LabelSpan>
                                再生
                            </LabelSpan>
                        </ChipButton>
                        {
                            isLogin ?
                                <React.Fragment>
                                    {
                                        favoriteFlg === FLG.ON
                                            ?
                                            // お気に入り登録済み
                                            <ChipButton>
                                                <IconComponent
                                                    icon={FaStar}
                                                    size="16px"
                                                />
                                                <LabelSpan>
                                                    登録済み
                                                </LabelSpan>
                                            </ChipButton>
                                            :
                                            // お気に入り未登録
                                            <ChipButton
                                                onClick={clickRegister}
                                            >
                                                <IconComponent
                                                    icon={FaRegStar}
                                                    size="16px"
                                                />
                                                <LabelSpan>
                                                    登録する
                                                </LabelSpan>
                                            </ChipButton>
                                    }
                                </React.Fragment>
                                :
                                // ログイン画面遷移ボタン
                                <ChipButton
                                    onClick={moveLogin}
                                >
                                    <IconComponent
                                        icon={MdLogin}
                                        size="16px"
                                    />
                                    <LabelSpan>
                                        ログインして登録
                                    </LabelSpan>
                                </ChipButton>
                        }
                    </ButtonPanelDiv>
                }
            </VideoMetaDiv>
            {
                // 閉じている間はタグ・フォルダ取得を走らせないため未マウントにする
                isOpenTagSelectModal &&
                <VideoDetailTagFolderSelect
                    isOpen={isOpenTagSelectModal}
                    closeTagSelectModal={closeTagSelectModal}
                />
            }
        </VideoInfoDiv>
    );
}
