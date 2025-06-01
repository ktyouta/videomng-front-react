import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { inherits } from "util";
import { useHeader } from "../Hook/useHeader";
import ButtonComponent from "../../Common/Component/ButtonComponent";
import { HeaderMenuUl } from "./HeaderMenuUl";
import { HeaderUserMenu } from "./HeaderUserMenu";
import { FlexSpaceDiv } from "../../Common/StyledComponent/FlexSpaceDiv";


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
  padding-left: 9%;
  padding-right: 5%;
  display:flex;
  align-items: center;
`;


export function Header() {

  console.log(`Header render`);

  return (
    <Parent>
      <MenuNav>
        {/* メニュー */}
        <HeaderMenuUl />
        <FlexSpaceDiv />
        {/* ユーザーメニュー */}
        <HeaderUserMenu />
      </MenuNav>
    </Parent>
  );
}