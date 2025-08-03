import React from "react";
import styled from "styled-components";
import { IconComponent } from "../../Common/Component/IconComponent";
import { RxCross1 } from "react-icons/rx";
import { MEDIA } from "../../Common/Const/MediaConst";


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
  gap: 1%;
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

const MenuLi = styled.li<{ isTopLine?: boolean }>`
  margin-bottom: 10%;
  cursor:pointer;
`;

const CloseIconAreaDiv = styled.div`
  height: 7%;
  text-align: right;
  padding-top: 6%;
  box-sizing: border-box;
  padding-right: 5%;
  background-color: #1e1e1e;
`;

type propsType = {
    closeSideMenu: () => void,
    openHowToUseModal: () => void
}

export function HeaderSideMenu(props: propsType) {

    return (
        <SideMenuAside>
            <CloseIconAreaDiv>
                <IconComponent
                    icon={RxCross1}
                    onclick={props.closeSideMenu}
                    style={{
                        color: "white"
                    }}
                />
            </CloseIconAreaDiv>
            <MenuUl>
                <MenuLi
                    onClick={props.openHowToUseModal}
                >
                    使い方を見る
                </MenuLi>
            </MenuUl>
        </SideMenuAside>
    );
}