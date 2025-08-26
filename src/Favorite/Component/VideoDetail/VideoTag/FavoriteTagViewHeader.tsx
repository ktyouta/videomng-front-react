import styled from "styled-components";
import { FavoriteFavoriteCommentModalIcon } from "../VideoComment/VideoFavoriteComment/FavoriteFavoriteCommentModalIcon";
import { FavoriteBlockCommentModalIcon } from "../VideoComment/VideoBlockComment/FavoriteBlockCommentModalIcon";
import { FlexSpaceDiv } from "../../../../Common/StyledComponent/FlexSpaceDiv";
import { FavoriteDetailSettingEditIcon } from "../VideoDetailSetting/FavoriteDetailSettingEditIcon";
import { EDIT_MODE } from "../../../Const/FavoriteConst";
import { IconComponent } from "../../../../Common/Component/IconComponent";
import { MdEdit } from "react-icons/md";
import { useFavoriteDetailSettingEditIcon } from "../../../Hook/VideoDetail/VideoDetailSetting/useFavoriteDetailSettingEditIcon";
import { useFavoriteTagViewHeader } from "../../../Hook/VideoDetail/VideoTag/useFavoriteTagViewHeader";
import { MEDIA } from "../../../../Common/Const/MediaConst";


//ヘッダータイトルのスタイル
const HeaderDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: white;
  padding-left: 1%;
  height: 50px;
  padding-right: 2%;
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


export function FavoriteTagViewHeader() {

  console.log("FavoriteTagViewHeader render");

  const {
    isOpenEditNav,
    openEditNav,
    closeEditNav,
    changeEdit,
  } = useFavoriteTagViewHeader();

  return (
    <HeaderDiv>
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
    </HeaderDiv>
  );
}