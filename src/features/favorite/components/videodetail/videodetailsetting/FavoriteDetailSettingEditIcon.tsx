import { MdEdit } from "react-icons/md";
import styled from "styled-components";
import { IconComponent } from "../../../../../components/IconComponent";
import { MEDIA } from "../../../../../consts/MediaConst";
import { useFavoriteDetailSettingEditIcon } from "../../../hooks/videodetail/videodetailsetting/useFavoriteDetailSettingEditIcon";


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


type propsType = {
    changeEdit: () => void,
}


export function FavoriteDetailSettingEditIcon(props: propsType) {

    const {
        isOpenEditNav,
        openEditNav,
        closeEditNav,
    } = useFavoriteDetailSettingEditIcon();

    return (
        <Parent>
            <IconComponent
                icon={MdEdit}
                onclick={props.changeEdit}
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
        </Parent>

    );
}