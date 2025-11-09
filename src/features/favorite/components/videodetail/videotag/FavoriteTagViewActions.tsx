import styled from "styled-components";
import { FavoriteFavoriteCommentModalIcon } from "../videocomment/videofavoritecomment/FavoriteFavoriteCommentModalIcon";
import { FavoriteBlockCommentModalIcon } from "../videocomment/videoblockcomment/FavoriteBlockCommentModalIcon";
import { FlexSpaceDiv } from "../../../../../styles/styledcomponent/FlexSpaceDiv";
import { FavoriteDetailSettingEditIcon } from "../videodetailsetting/FavoriteDetailSettingEditIcon";
import { EDIT_MODE } from "../../../const/FavoriteConst";
import { IconComponent } from "../../../../../components/IconComponent";
import { MdEdit } from "react-icons/md";
import { useFavoriteDetailSettingEditIcon } from "../../../hooks/videodetail/videodetailsetting/useFavoriteDetailSettingEditIcon";
import { useFavoriteTagViewActions } from "../../../hooks/videodetail/videotag/useFavoriteTagViewActions";
import { MEDIA } from "../../../../../consts/MediaConst";


const Parent = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: white;
  height: 22px;
  padding-right: 7px;
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
    <Parent>
      <FlexSpaceDiv />
      <EditIconDiv>
        <IconComponent
          icon={MdEdit}
          onclick={changeEdit}
          size="100%"
          style={{ color: "white" }}
          onMouseEnter={openEditNav}
          onMouseLeave={closeEditNav}
        />
        <BlockNavDiv
          isDisplay={isOpenEditNav}
        >
          編集
        </BlockNavDiv>
      </EditIconDiv>
    </Parent>
  );
}