import styled from "styled-components";
import { mediaQuery, useMediaQuery } from "../../../hooks/useMediaQuery";
import { FlexSpaceDiv } from "../../../styles/styledcomponent/FlexSpaceDiv";
import { HeaderMenuUl } from "./Menu/HeaderMenuUl";
import { HeaderSideMenu } from "./SideMenu/HeaderSideMenu";
import { HeaderUserMenu } from "./UserMenu/HeaderUserMenu";


const Parent = styled.div<{ isMobile: boolean }>`
  width: 100%;
  height:${({ isMobile }) => (isMobile ? `60px` : "125px")};
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
  height:100%;
`;

export function Header() {

  console.log(`Header render`);

  // 画面サイズ判定
  const isMobile = useMediaQuery(mediaQuery.mobile);

  return (
    <Parent
      isMobile={isMobile}
    >
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