import { MdPlayArrow } from 'react-icons/md';
import styled from "styled-components";
import ButtonComponent from "../../../../components/ButtonComponent";
import { IconComponent } from "../../../../components/IconComponent";
import { ModalPortalConfirm } from "../../../../components/ModalPortalConfirm";
import { MEDIA } from "../../../../consts/MediaConst";
import { useFavoriteVideoDetailInfo } from "../../hooks/videodetail/useFavoriteVideoDetailInfo";
import { FavoriteVideoDetailDataType } from "../../types/videodetail/FavoriteVideoDetailDataType";

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
        isMobile,
    } = useFavoriteVideoDetailInfo();

    const videoDetail = props.videoDetail;
    const item = videoDetail.item;
    const snippet = item.snippet;
    // サムネイルURL
    const imgUrl = snippet.thumbnails.high?.url;
    // タイトル
    const title = snippet.title;
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
                    variant="green"
                    onClick={play}
                    style={{
                        "fontSize": "0.9rem",
                        "height": "50px",
                        "width": `${buttonWidth}`,
                        "color": "white",
                        "borderRadius": "8px",
                        "marginBottom": isMobile ? "7%" : "10%",
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
                        "fontSize": "0.9rem",
                        "height": "50px",
                        "width": `${buttonWidth}`,
                        "background": "rgb(175, 55, 42)",
                        "color": "white",
                        "borderRadius": "8px",
                        "display": "block",
                    }}
                >
                    お気に入りから外す
                </ButtonComponent>
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