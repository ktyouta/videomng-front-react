import { FaRegTrashAlt } from 'react-icons/fa';
import { MdPlayArrow } from 'react-icons/md';
import styled from "styled-components";
import { IconComponent } from "../../../../components/IconComponent";
import { ModalPortalConfirm } from "../../../../components/ModalPortalConfirm";
import { MEDIA } from "../../../../consts/MediaConst";
import { mediaQuery, useMediaQuery } from "../../../../hooks/useMediaQuery";
import { FAVORITE_SEARCH_AREA_ACCENT_COLOR, FAVORITE_SEARCH_AREA_BUTTON_HOVER_BG } from '../../const/FavoriteConst';
import { useFavoriteVideoDetailInfo } from "../../hooks/videodetail/useFavoriteVideoDetailInfo";
import { FavoriteVideoDetailDataType } from "../../types/videodetail/FavoriteVideoDetailDataType";

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

const PcChipButton = styled.button`
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
    width: 50%;

    &:hover {
      background-color: ${FAVORITE_SEARCH_AREA_BUTTON_HOVER_BG};
      transform: translateY(-1px);
    }

    &:hover ${LabelSpan} {
      color: ${FAVORITE_SEARCH_AREA_ACCENT_COLOR};
    }
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
                    <ButtonPanelDiv>
                        <PcChipButton
                            onClick={play}
                        >
                            <IconComponent
                                icon={MdPlayArrow}
                                size="16px"
                            />
                            <LabelSpan>
                                再生
                            </LabelSpan>
                        </PcChipButton>
                        <PcChipButton
                            onClick={clickDeleteFavoriteVide}
                        >
                            <IconComponent
                                icon={FaRegTrashAlt}
                                size="16px"
                            />
                            <LabelSpan>
                                解除
                            </LabelSpan>
                        </PcChipButton>
                    </ButtonPanelDiv>
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
