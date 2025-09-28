import styled from "styled-components";
import { IconComponent } from "../../../../Common/Component/IconComponent";
import { FaCheck } from "react-icons/fa6";
import { useFavoriteTagEditUpdateIcon } from "../../../Hook/VideoDetail/VideoTag/useFavoriteTagEditUpdateIcon";
import { MEDIA } from "../../../../Common/Const/MediaConst";


const Parent = styled.div`
  box-sizing: border-box;
  position:relative;
  display: flex;
  grid-column-gap: 10px;
  width: 15px;
  height: 15px;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
      width: 22px;
      height: 22px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
      width: 22px;
      height: 22px;
  }

  @media (min-width: ${MEDIA.PC}) {
      width: 22px;
      height: 22px;
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
                size="100%"
                style={{ color: "white" }}
                onMouseEnter={openUpdateNav}
                onMouseLeave={closeUpdateNav}
            />
            <BlockNavDiv
                isDisplay={isOpenUpdateNav}
            >
                更新
            </BlockNavDiv>
        </Parent>

    );
}