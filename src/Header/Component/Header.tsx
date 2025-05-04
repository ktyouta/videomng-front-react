import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { inherits } from "util";
import { useHeader } from "../Hook/useHeader";
import ButtonComponent from "../../Common/Component/ButtonComponent";
import { HeaderMenuUl } from "./HeaderMenuUl";
import { HeaderUserMenu } from "./HeaderUserMenu";


const Parent = styled.div`
  width: 100%;
  height:100px;
  top: 0;
  left: 0;
  position: fixed;
  background-color:#00050d;
`;

const MenuNav = styled.nav`
  width: 100%;
  height:84%;
  box-sizing: border-box;
  padding-left: 9%;
  padding-top: 3%;
  padding-right: 5%;
  display:flex;
`;


//メニューとコンテンツの間隔
const SpaceDiv = styled.div`
    flex:1;
`;


export function Header() {

  console.log(`Header render`);

  return (
    <Parent>
      <MenuNav>
        {/* メニュー */}
        <HeaderMenuUl />
        <SpaceDiv />
        {/* ユーザーメニュー */}
        <HeaderUserMenu />
      </MenuNav>
    </Parent>
  );
}