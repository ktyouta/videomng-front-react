import styled from "styled-components";
import { Z_INDEX_PARAM } from "../../../consts/CommonConst";
import { MEDIA } from "../../../consts/MediaConst";
import { mediaQuery, useMediaQuery } from "../../../hooks/useMediaQuery";
import { FlexSpaceDiv } from "../../../styles/styledcomponent/FlexSpaceDiv";
import { HEADER_PANEL_BORDER_COLOR } from "../const/HeaderConst";
import { HeaderMenuUl } from "./Menu/HeaderMenuUl";
import { HeaderSideMenu } from "./SideMenu/HeaderSideMenu";
import { HeaderUserMenu } from "./UserMenu/HeaderUserMenu";


const SERVICE_TITLE = "VideoMng";

const Parent = styled.div<{ isMobile: boolean }>`
  width: 100%;
  height:${({ isMobile }) => (isMobile ? `60px` : "125px")};
  box-sizing: border-box;
  top: 0;
  left: 0;
  position: fixed;
  background-color:#00050d;
  border-bottom: 1px solid ${HEADER_PANEL_BORDER_COLOR};
  z-index: ${Z_INDEX_PARAM.HEADER_BAR};
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

const TitleSpan = styled.span<{ isMobile: boolean }>`
  color: white;
  font-weight: 600;
  white-space: nowrap;
  font-size: 16px;
  font-family:"Playfair Display",serif;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: 20px;
    margin-right: 65px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: 20px;
    margin-right: 65px;
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: 20px;
    margin-right: 65px;
  }
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
        {/* サービス名 */}
        <TitleSpan
          isMobile={isMobile}
        >
          {SERVICE_TITLE}
        </TitleSpan>
        {/* メニュー */}
        <HeaderMenuUl />
        <FlexSpaceDiv />
        {/* ユーザーメニュー */}
        <HeaderUserMenu />
      </MenuNav>
    </Parent>
  );
}