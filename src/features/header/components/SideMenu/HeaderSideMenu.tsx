import React from "react";
import { IoBookmarkOutline, IoHelpCircleOutline, IoHomeOutline, IoWarningOutline } from "react-icons/io5";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import styled from "styled-components";
import { IconComponent } from "../../../../components/IconComponent";
import { MEDIA } from "../../../../consts/MediaConst";
import { HEADER_BURGER_ICON_SIZE, HEADER_FONT_SIZE_LARGE, HEADER_FONT_SIZE_SMALL, HEADER_PANEL_BG_COLOR, HEADER_PANEL_BORDER_COLOR, HEADER_PANEL_SHADOW, HEADER_PANEL_TRANSITION, MENU_NO } from "../../const/HeaderConst";
import { useHeaderSideMenu } from "../../hooks/SideMenu/useHeaderSideMenu";
import { HeaderSideMenuLi } from "./HeaderSideMenuLi";
import { HeaderSideMenuModal } from "./HeaderSideMenuModal";


// サイドメニューパネルの配色（ホーム・お気に入り検索エリア等の共通パネルと揃える）
const PANEL_BG = HEADER_PANEL_BG_COLOR;
const PANEL_BORDER = HEADER_PANEL_BORDER_COLOR;
const PANEL_SHADOW = HEADER_PANEL_SHADOW;

const LIST_TOP_PADDING = "8%";
const LIST_BOTTOM_PADDING = "1%";
const LIST_GAP = "25px";

const PANEL_CORNER_RADIUS = "25px";

const SideMenuAside = styled.aside<{ isDisplay: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 195px;
  height: 100%;
  background-color: ${PANEL_BG};
  border-right: 1px solid ${PANEL_BORDER};
  border-top-right-radius: ${PANEL_CORNER_RADIUS};
  border-bottom-right-radius: ${PANEL_CORNER_RADIUS};
  box-shadow: ${PANEL_SHADOW};
  overflow: hidden;
  transform: ${({ isDisplay }) => (isDisplay ? "translateX(0)" : "translateX(-100%)")};
  visibility: ${({ isDisplay }) => (isDisplay ? "visible" : "hidden")};
  transition: transform ${HEADER_PANEL_TRANSITION}, visibility ${HEADER_PANEL_TRANSITION};
  z-index: 1000;
  font-size: ${HEADER_FONT_SIZE_SMALL};

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    width: 250px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    width: 250px;
  }

  @media (min-width: ${MEDIA.PC}) {
    width: 250px;
  }
`;

const MenuUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: auto;
  padding-top: ${LIST_TOP_PADDING};
  height:100%;
  box-sizing: border-box;
  padding-bottom: ${LIST_BOTTOM_PADDING};
  color: white;
  background-color: ${PANEL_BG};
  display: flex;
  flex-direction: column;
  gap: ${LIST_GAP};
  font-size: ${HEADER_FONT_SIZE_SMALL};

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: ${HEADER_FONT_SIZE_SMALL};
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: ${HEADER_FONT_SIZE_LARGE};
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: ${HEADER_FONT_SIZE_LARGE};
  }
`;

const SectionDividerHr = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid ${PANEL_BORDER};
  margin: 0;
`;

const CloseIconAreaDiv = styled.div`
  height: 7%;
  text-align: right;
  padding-top: 6%;
  box-sizing: border-box;
  padding-right: 5%;
  background-color: ${PANEL_BG};
`;

const OverlaySimeMenuDiv = styled.div<{ isDisplay: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: ${({ isDisplay }) => (isDisplay ? 0.9 : 0)};
    visibility: ${({ isDisplay }) => (isDisplay ? "visible" : "hidden")};
    transition: opacity ${HEADER_PANEL_TRANSITION}, visibility ${HEADER_PANEL_TRANSITION};
    z-index: 999;
`;

const BurgerIconDiv = styled.div`
  margin-right: 5%;
  width: ${HEADER_BURGER_ICON_SIZE};
  height: 25%;
  display: flex;
  align-items: center;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    margin-right: 2%;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    margin-right: 2%;
  }

  @media (min-width: ${MEDIA.PC}) {
    margin-right: 2%;
  }
`;


export function HeaderSideMenu() {

  console.log(`HeaderSideMenu render`);

  const {
    isMobile,
    openMenuNo,
    openInnerMenu,
    closeInnerMenu,
    isOpenSideMenu,
    openSideMenu,
    closeSideMenu,
    moveToHome,
    moveToFavorite,
    isLogin, } = useHeaderSideMenu();

  return (
    <React.Fragment>
      {/* ハンバーガーメニューアイコン */}
      <BurgerIconDiv>
        <IconComponent
          icon={RxHamburgerMenu}
          onclick={openSideMenu}
          style={{ color: "white" }}
          size={isMobile ? "18px" : "22px"}
        />
      </BurgerIconDiv>
      <SideMenuAside
        isDisplay={isOpenSideMenu}
      >
        {/* 閉じるアイコン */}
        <CloseIconAreaDiv>
          <IconComponent
            icon={RxCross1}
            onclick={closeSideMenu}
            style={{
              color: "white"
            }}
            size="17px"
          />
        </CloseIconAreaDiv>
        <MenuUl>
          {
            isMobile &&
            <React.Fragment>
              <HeaderSideMenuLi
                title="ホーム"
                icon={IoHomeOutline}
                onClick={moveToHome}
              />
              {
                isLogin &&
                <HeaderSideMenuLi
                  title="お気に入り"
                  icon={IoBookmarkOutline}
                  onClick={moveToFavorite}
                />
              }
              <SectionDividerHr />
            </React.Fragment>
          }
          <HeaderSideMenuLi
            title="使い方を見る"
            icon={IoHelpCircleOutline}
            onClick={() => {
              openInnerMenu(MENU_NO.HOW_TO_USE);
            }}
          />
          <HeaderSideMenuLi
            title="使用上の注意"
            icon={IoWarningOutline}
            onClick={() => {
              openInnerMenu(MENU_NO.USE_PRECAUTION);
            }}
          />
        </MenuUl>
      </SideMenuAside>
      <OverlaySimeMenuDiv
        isDisplay={isOpenSideMenu}
        onClick={closeSideMenu}
      />
      {/* モーダルメニュー */}
      <HeaderSideMenuModal
        openMenuNo={openMenuNo}
        closeMenu={closeInnerMenu}
      />
    </React.Fragment>
  );
}