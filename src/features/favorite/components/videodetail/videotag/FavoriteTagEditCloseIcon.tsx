import { RxCross1 } from "react-icons/rx";
import styled from "styled-components";
import { IconComponent } from "../../../../../components/IconComponent";
import { MEDIA } from "../../../../../consts/MediaConst";
import { useFavoriteTagEditCloseIcon } from "../../../hooks/videodetail/videotag/useFavoriteTagEditCloseIcon";


const Parent = styled.div`
  box-sizing: border-box;
  position:relative;
  display: flex;
  grid-column-gap: 10px;
  margin-right: 14px;
  font-size: 16px;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
      font-size: 20px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
      font-size: 20px;
  }

  @media (min-width: ${MEDIA.PC}) {
      font-size: 20px;
  }
`;

const BlockNavDiv = styled.div<{ isDisplay: boolean }>`
    display: ${({ isDisplay }) => (isDisplay ? "flex" : "none")};
    width: 40px;
    height: 20px;
    top: 29px;
    font-size: 10px;
    background-color: white;
    z-index: 10;
    position: absolute;
    left: -17px;
    box-sizing: border-box;
    color: black;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
`;


export function FavoriteTagEditCloseIcon() {

    const {
        isOpenCloseNav,
        openCloseNav,
        closeCloseNav,
        changeView,
    } = useFavoriteTagEditCloseIcon();

    return (
        <Parent>
            <IconComponent
                icon={RxCross1}
                onclick={changeView}
                bgColor="#E53935"
                onMouseEnter={openCloseNav}
                onMouseLeave={closeCloseNav}
                hasCircleBackground
            />
            <BlockNavDiv
                isDisplay={isOpenCloseNav}
            >
                閉じる
            </BlockNavDiv>
        </Parent>

    );
}