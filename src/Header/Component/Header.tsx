import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { inherits } from "util";
import { useHeader } from "../Hook/useHeader";
import ButtonComponent from "../../Common/Component/ButtonComponent";
import { HeaderMenuUl } from "./HeaderMenuUl";
import { HeaderUserMenu } from "./HeaderUserMenu";
import { FlexSpaceDiv } from "../../Common/StyledComponent/FlexSpaceDiv";
import { RxHamburgerMenu } from "react-icons/rx";
import { IconComponent } from "../../Common/Component/IconComponent";
import { HeaderSideMenu } from "./HeaderSideMenu";
import ModalComponent from "../../Common/Component/ModalComponent";
import { OverlayDiv } from "../../Common/StyledComponent/OverlayDiv";
import { HeaderHowToUse } from "./HeaderHowToUse";


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
`;

const BurgerIconDiv = styled.div`
  margin-right: 5%;
  width: 20px;
  height: 25%;
  display: flex;
  align-items: center;
`;

export const OverlaySimeMenuDiv = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: 0.9;
    z-index: 999
`;


export function Header() {

  console.log(`Header render`);

  const {
    openSideMenu,
    closeSideMenu,
    isOpenSideMenu,
    isOpenHowToUseModal,
    openHowToUseModal,
    closeHowToUseModal
  } = useHeader();

  return (
    <Parent>
      <MenuNav>
        {/* ハンバーガーメニューアイコン */}
        <BurgerIconDiv>
          <IconComponent
            icon={RxHamburgerMenu}
            onclick={openSideMenu}
            style={{ color: "white" }}
            size="95%"
          />
        </BurgerIconDiv>
        {/* ハンバーガーメニュー */}
        {
          isOpenSideMenu &&
          <React.Fragment>
            <HeaderSideMenu
              closeSideMenu={closeSideMenu}
              openHowToUseModal={openHowToUseModal}
            />
            <OverlaySimeMenuDiv />
          </React.Fragment>
        }
        {/* メニュー */}
        <HeaderMenuUl />
        <FlexSpaceDiv />
        {/* ユーザーメニュー */}
        <HeaderUserMenu />
      </MenuNav>
      {
        // 使い方を見るモーダル
        isOpenHowToUseModal &&
        <ModalComponent
          modalIsOpen={isOpenHowToUseModal}
          closeModal={closeHowToUseModal}
          style={{
            backgroundColor: "#181a1e",
            borderRadius: "1%",
            border: "solid 1px",
            color: "white",
            overflowY: "hidden",
          }}
          width="42%"
          height="65%"
          positionTop="15%"
          positionLeft="29%"
        >
          <HeaderHowToUse
            close={closeHowToUseModal}
          />
        </ModalComponent>
      }
      {
        isOpenHowToUseModal &&
        <OverlayDiv />
      }
    </Parent>
  );
}