import styled from "styled-components";
import { HeaderMenuUl } from "./Menu/HeaderMenuUl";
import { HeaderUserMenu } from "./UserMenu/HeaderUserMenu";
import { FlexSpaceDiv } from "../../../styles/styledcomponent/FlexSpaceDiv";
import { HeaderSideMenu } from "./SideMenu/HeaderSideMenu";
import { MEDIA } from "../../../consts/MediaConst";


const Parent = styled.div`
  width: 100%;
  height:115px;
  top: 0;
  left: 0;
  position: fixed;
  background-color:#00050d;
  z-index: 2;
`;

const MenuNav = styled.nav`
  width: 100%;
  height:100%;
  box-sizing: border-box;
  padding-left: 3%;
  padding-right: 5%;
  display:flex;
  align-items: center;
  height:78%;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    height:78%;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    height:100%;
  }

  @media (min-width: ${MEDIA.PC}) {
    height:100%;
  }
`;


export function Header() {

  console.log(`Header render`);

  return (
    <Parent>
      <MenuNav>
        {/* サイドメニュー */}
        <HeaderSideMenu />
        {/* メニュー */}
        <HeaderMenuUl />
        <FlexSpaceDiv />
        {/* ユーザーメニュー */}
        <HeaderUserMenu />
      </MenuNav>
    </Parent>
  );
}