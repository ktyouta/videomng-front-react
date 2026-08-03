import { FaCheck } from "react-icons/fa6";
import styled from "styled-components";
import { IconComponent } from "../../../../../components/IconComponent";
import { MEDIA } from "../../../../../consts/MediaConst";
import { useFavoriteTagEditUpdateIcon } from "../../../hooks/videodetail/videotag/useFavoriteTagEditUpdateIcon";


const Parent = styled.div`
  box-sizing: border-box;
  position:relative;
  display: flex;
  grid-column-gap: 10px;
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
    left: -12px;
    box-sizing: border-box;
    color: black;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
`;

export function FavoriteTagEditUpdateIcon() {

    const {
        isOpenUpdateNav,
        openUpdateNav,
        closeUpdateNav,
        udpateTag,
    } = useFavoriteTagEditUpdateIcon();

    return (
        <Parent>
            <IconComponent
                icon={FaCheck}
                onclick={udpateTag}
                onMouseEnter={openUpdateNav}
                onMouseLeave={closeUpdateNav}
                bgColor="#43A047"
                hasCircleBackground
            />
            <BlockNavDiv
                isDisplay={isOpenUpdateNav}
            >
                更新
            </BlockNavDiv>
        </Parent>

    );
}