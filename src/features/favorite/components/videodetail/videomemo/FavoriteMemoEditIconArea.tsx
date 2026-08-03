import { MdEdit } from "react-icons/md";
import styled from "styled-components";
import { IconComponent } from "../../../../../components/IconComponent";
import { MEDIA } from "../../../../../consts/MediaConst";
import { useFavoriteMemoEditIconArea } from "../../../hooks/videodetail/videomemo/useFavoriteMemoEditIconArea";


const Parent = styled.div`
  box-sizing: border-box;
  position:relative;
  display: flex;
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

const EditNavDiv = styled.div<{ isDisplay: boolean }>`
    display: ${({ isDisplay }) => (isDisplay ? "flex" : "none")};
    width: 40px;
    height: 25px;
    top: 20px;
    font-size: 10px;
    background-color: white;
    z-index: 10;
    position: absolute;
    left: -22px;
    box-sizing: border-box;
    color: black;
    justify-content: center;
    align-items: center;
`;

type propsType = {
    openEdit: () => void
}

export function FavoriteMemoEditIconArea(props: propsType) {

    console.log("FavoriteMemoEditIcon render");

    const {
        isOpenEditNav,
        openEditNav,
        closeEditNav, } = useFavoriteMemoEditIconArea();

    return (
        <Parent>
            <IconComponent
                icon={MdEdit}
                onclick={props.openEdit}
                bgColor="#60A5FA"
                onMouseEnter={openEditNav}
                onMouseLeave={closeEditNav}
                hasCircleBackground
            />
            <EditNavDiv
                isDisplay={isOpenEditNav}
            >
                編集
            </EditNavDiv>
        </Parent>
    );
}