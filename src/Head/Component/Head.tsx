import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { HOME_ROOT_PATH } from "../../Home/Const/HomeConst";
import { inherits } from "util";
import { useHead } from "../Hook/useHead";
import ButtonComponent from "../../Common/Component/ButtonComponent";


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

const NavUl = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  height: 100%;
  width: 70%;
`;

const NavLi = styled.li<{ isActive: boolean }>`
  height:100%;
  margin-right: 20px;
  color:white;
  font-size: 22px;
  cursor:pointer;
  &:hover {
    color: black;
    background-color: white;
  }
  background: ${({ isActive }) => (isActive ? "radial-gradient(50% 50% at 50% 0, rgba(var(--action-background-color,255,255,255),.8) 0, transparent 100%), hsla(0, 0%, 100%, .2);" : "")};
  box-shadow: ${({ isActive }) => (isActive ? "0 -4px 16px 0 rgba(var(--action-background-color,255,255,255),.2)" : "")};
  padding-left: 1%;
  padding-right: 1%;
  border-radius: 7%;
  font-weight:400;
`;

//メニューとコンテンツの間隔
const SpaceDiv = styled.div`
    flex:1;
`;


export function Head() {

  console.log(`Head render`);

  const {
    nowPath,
    clickLogin } = useHead();

  return (
    <Parent>
      <MenuNav>
        <NavUl>
          <NavLi
            isActive={nowPath === HOME_ROOT_PATH}
          >
            <Link
              to={HOME_ROOT_PATH}
              style={{ color: "inherit", fontWeight: "inherit" }}
            >
              ホーム
            </Link>
          </NavLi>
        </NavUl>
        <SpaceDiv />
        <ButtonComponent
          styleTypeNumber="GRAD_RED"
          title={"ログイン"}
          onclick={clickLogin}
          style={{
            fontSize: "0.9rem",
            width: "7%",
            height: "100%",
          }}
        />
      </MenuNav>
    </Parent>
  );
}