import React from "react";
import styled from "styled-components";
import { IconComponent } from "../../../Common/Component/IconComponent";
import { RxCross1 } from "react-icons/rx";
import { MEDIA } from "../../../Common/Const/MediaConst";
import { RxHamburgerMenu } from "react-icons/rx";
import { useHeaderSideMenu } from "../../Hook/SideMenu/useHeaderSideMenu";
import { HeaderSideMenuList } from "./HeaderSideMenuList";


const BurgerIconDiv = styled.div`
  margin-right: 5%;
  width: 20px;
  height: 25%;
  display: flex;
  align-items: center;
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


export function HeaderSideMenu() {

  console.log(`HeaderSideMenu render`);

  const {
    openSideMenu,
    closeSideMenu,
    isOpenSideMenu, } = useHeaderSideMenu();

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
      {/* メニュー一覧 */}
      {
        isOpenSideMenu &&
        <React.Fragment>
          <HeaderSideMenuList
            closeSideMenu={closeSideMenu}
          />
          <OverlaySimeMenuDiv />
        </React.Fragment>
      }
    </React.Fragment>
  );
}