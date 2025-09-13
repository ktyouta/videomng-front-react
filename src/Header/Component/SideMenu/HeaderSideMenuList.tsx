import React from "react";
import styled from "styled-components";
import { IconComponent } from "../../../Common/Component/IconComponent";
import { RxCross1 } from "react-icons/rx";
import { MEDIA } from "../../../Common/Const/MediaConst";
import { useHeaderSideMenuList } from "../../Hook/SideMenu/useHeaderSideMenuList";
import ModalComponent from "../../../Common/Component/ModalComponent";
import { HeaderHowToUse } from "./HowToUse/HeaderHowToUse";
import { HeaderUsagePrecaution } from "./UsagePrecaution/HeaderUsagePrecaution";
import { OverlayDiv } from "../../../Common/StyledComponent/OverlayDiv";
import { HeaderHowToUseModal } from "./HowToUse/HeaderHowToUseModal";
import { HeaderUsagePrecautionModal } from "./UsagePrecaution/HeaderUsagePrecautionModal";


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

type propsType = {
    closeSideMenu: () => void,
}

export function HeaderSideMenuList(props: propsType) {

    console.log(`HeaderSideMenuList render`);

    return (
        <SideMenuAside>
            {/* 閉じるアイコン */}
            <CloseIconAreaDiv>
                <IconComponent
                    icon={RxCross1}
                    onclick={props.closeSideMenu}
                    style={{
                        color: "white"
                    }}
                    size="17px"
                />
            </CloseIconAreaDiv>
            <MenuUl>
                {/* 使い方を見る */}
                <HeaderHowToUseModal />
                {/* 使用上の注意 */}
                <HeaderUsagePrecautionModal />
            </MenuUl>
        </SideMenuAside>
    );
}