import { FaRegTrashAlt } from 'react-icons/fa';
import { MdPlayArrow } from 'react-icons/md';
import styled from "styled-components";
import ButtonComponent from "../../../../components/ButtonComponent";
import { IconComponent } from "../../../../components/IconComponent";
import { ModalPortalConfirm } from "../../../../components/ModalPortalConfirm";
import { MEDIA } from "../../../../consts/MediaConst";
import { mediaQuery, useMediaQuery } from "../../../../hooks/useMediaQuery";
import { useFavoriteVideoDetailInfo } from "../../hooks/videodetail/useFavoriteVideoDetailInfo";
import { FavoriteVideoDetailDataType } from "../../types/videodetail/FavoriteVideoDetailDataType";
import { FAVORITE_VIDEO_DETAIL_FONT_SIZE } from "./consts/FavoriteVideoDetailFontSize";

const VideoInfoDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    width: 95%;
    padding-top: 3%;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    width: 25%;
    padding-top: 3%;
  }

  @media (min-width: ${MEDIA.PC}) {
    width: 25%;
    padding-top: 3%;
  }
`;

const ThumbnailWrapperDiv = styled.div`
    position: relative;
    width: 99%;
`;

const VideoImg = styled.img`
    width: 100%;
    display: block;
    border-radius: 6%;
`;

const IconBtnAreaDiv = styled.div`
    position: absolute;
    top: -10px;
    right: -10px;
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
    background: none;
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

const BtnDiv = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
`;


type propsType = {
    videoDetail: FavoriteVideoDetailDataType
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

    // タブレット・PC幅判定(ボタンの出し分け用。isMobileは768px幅をタブレットと重複して判定するため使わない)
    const isTablet = useMediaQuery(mediaQuery.tablet);
    const isPc = useMediaQuery(mediaQuery.pc);
    const isTabletOrPc = isTablet || isPc;

    const videoDetail = props.videoDetail;
    const item = videoDetail.item;
    const snippet = item.snippet;
    // サムネイルURL
    const imgUrl = snippet.thumbnails.high?.url;
    // タイトル
    const title = snippet.title;

    return (
        <VideoInfoDiv>
            <ThumbnailWrapperDiv>
                <VideoImg
                    src={imgUrl}
                />
                {
                    !isTabletOrPc &&
                    <IconBtnAreaDiv>
                        <IconBadgeButton
                            onClick={clickDeleteFavoriteVide}
                        >
                            <IconComponent
                                icon={FaRegTrashAlt}
                                size="16px"
                                style={{ color: "white" }}
                            />
                        </IconBadgeButton>
                    </IconBtnAreaDiv>
                }
            </ThumbnailWrapperDiv>
            <VideoMetaDiv>
                <VideoTitle>
                    {title}
                </VideoTitle>
                {
                    isTabletOrPc &&
                    <>
                        <ButtonComponent
                            onClick={play}
                            style={{
                                "fontSize": FAVORITE_VIDEO_DETAIL_FONT_SIZE.BUTTON.PC,
                                "minHeight": "50px",
                                "width": "100%",
                                "background": "#3a3d42",
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
                        <ButtonComponent
                            onClick={clickDeleteFavoriteVide}
                            style={{
                                "fontSize": FAVORITE_VIDEO_DETAIL_FONT_SIZE.BUTTON.PC,
                                "minHeight": "50px",
                                "width": "100%",
                                "background": "#3a3d42",
                                "color": "white",
                                "borderRadius": "8px",
                                "display": "block",
                            }}
                        >
                            お気に入りから外す
                        </ButtonComponent>
                    </>
                }
            </VideoMetaDiv>
            <ModalPortalConfirm
                isOpenModal={isOpenModal}
                closeModal={closeModal}
                titleMessage={`この動画をお気に入りから外してもよろしいですか？`}
                clickOk={executeDelete}
            />
        </VideoInfoDiv>
    );
}
