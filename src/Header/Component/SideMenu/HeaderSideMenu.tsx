import React from "react";
import styled from "styled-components";
import { IconComponent } from "../../../Common/Component/IconComponent";
import { RxCross1 } from "react-icons/rx";
import { MEDIA } from "../../../Common/Const/MediaConst";
import { HeaderHowToUseModal } from "./HowToUse/HeaderHowToUseModal";
import { HeaderUsagePrecautionModal } from "./UsagePrecaution/HeaderUsagePrecautionModal";
import { MENU_NO } from "../../Const/HeaderConst";
import { RxHamburgerMenu } from "react-icons/rx";
import { useHeaderSideMenu } from "../../Hook/SideMenu/useHeaderSideMenu";
import { OverlayDiv } from "../../../Common/StyledComponent/OverlayDiv";


const SideMenuAside = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 195px;
  height: 100%;
  background: white;
  transition: transform 0.3s ease;
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
  padding-top: 8%;
  height:100%;
  box-sizing: border-box;
  padding-bottom: 1%;
  color: white;
  background-color: #1e1e1e;
  padding-left: 10%;
  display: flex;
  flex-direction: column;
  gap: 25px;
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

const CloseIconAreaDiv = styled.div`
  height: 7%;
  text-align: right;
  padding-top: 6%;
  box-sizing: border-box;
  padding-right: 5%;
  background-color: #1e1e1e;
`;

const OverlaySimeMenuDiv = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: 0.9;
    z-index: 999
`;

const MenuLi = styled.li`
  cursor:pointer;
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
    openMenuNo,
    openInnerMenu,
    closeInnerMenu,
    isOpenSideMenu,
    openSideMenu,
    closeSideMenu } = useHeaderSideMenu();

  return (
    <React.Fragment>
      {/* ハンバーガーメニューアイコン */}
      <BurgerIconDiv>
        <IconComponent
          icon={RxHamburgerMenu}
          onclick={openSideMenu}
          style={{ color: "white" }}
          size="95%"
        />
      </BurgerIconDiv>
      {
        isOpenSideMenu &&
        <React.Fragment>
          <SideMenuAside>
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
              <MenuLi
                onClick={() => {
                  openInnerMenu(MENU_NO.HOW_TO_USE);
                }}
              >
                使い方を見る
              </MenuLi>
              <MenuLi
                onClick={() => {
                  openInnerMenu(MENU_NO.USE_PRECAUTION);
                }}
              >
                使用上の注意
              </MenuLi>
            </MenuUl>
          </SideMenuAside>
          <OverlaySimeMenuDiv />
        </React.Fragment>
      }
      {
        // 使い方を見る
        openMenuNo === MENU_NO.HOW_TO_USE &&
        <HeaderHowToUseModal
          closeMenu={closeInnerMenu}
        />
      }
      {
        // 使用上の注意
        openMenuNo === MENU_NO.USE_PRECAUTION &&
        <HeaderUsagePrecautionModal
          closeMenu={closeInnerMenu}
        />
      }
      {
        openMenuNo !== MENU_NO.NONE &&
        <OverlayDiv />
      }
    </React.Fragment>
  );
}