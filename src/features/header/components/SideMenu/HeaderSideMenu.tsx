import React from "react";
import { IoBookmarkOutline, IoHelpCircleOutline, IoHomeOutline, IoWarningOutline } from "react-icons/io5";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import styled from "styled-components";
import { IconComponent } from "../../../../components/IconComponent";
import { MEDIA } from "../../../../consts/MediaConst";
import { MENU_NO } from "../../const/HeaderConst";
import { useHeaderSideMenu } from "../../hooks/SideMenu/useHeaderSideMenu";
import { HeaderSideMenuLi } from "./HeaderSideMenuLi";
import { HeaderSideMenuModal } from "./HeaderSideMenuModal";


// サイドメニューパネルの配色（ホーム・お気に入り検索エリア等の共通パネルと揃える）
const PANEL_BG = "#1c1f26";
const PANEL_BORDER = "#3a3f4b";
const PANEL_SHADOW = "0 4px 12px rgba(0, 0, 0, 0.6)";

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
  transition: transform 0.3s ease, visibility 0.3s ease;
  z-index: 1000;
  font-size: 13px;

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
  font-size: 13px;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: 13px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: 16px;
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: 16px;
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
    transition: opacity 0.3s ease, visibility 0.3s ease;
    z-index: 999;
`;

const BurgerIconDiv = styled.div`
  margin-right: 5%;
  width: 20px;
  height: 25%;
  display: flex;
  align-items: center;
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
          size="20px"
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