import { MdEdit } from "react-icons/md";
import styled from "styled-components";
import { IconComponent } from "../../../../../components/IconComponent";
import { MEDIA } from "../../../../../consts/MediaConst";
import { useFavoriteTagViewActions } from "../../../hooks/videodetail/videotag/useFavoriteTagViewActions";


const IconOverlayDiv = styled.div`
  position: absolute;
  top: -5px;
  right: -2px;
  display: flex;
  align-items: center;
  z-index: 1;
`;

const EditIconDiv = styled.div`
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
    top: 33px;
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


export function FavoriteTagViewActions() {

  console.log("FavoriteTagViewActions render");

  const {
    isOpenEditNav,
    openEditNav,
    closeEditNav,
    changeEdit,
  } = useFavoriteTagViewActions();

  return (
    <IconOverlayDiv>
      <EditIconDiv>
        <IconComponent
          icon={MdEdit}
          onclick={changeEdit}
          size="100%"
          bgColor="#60A5FA"
          onMouseEnter={openEditNav}
          onMouseLeave={closeEditNav}
        />
        <BlockNavDiv
          isDisplay={isOpenEditNav}
        >
          編集
        </BlockNavDiv>
      </EditIconDiv>
    </IconOverlayDiv>
  );
}