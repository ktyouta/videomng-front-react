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


const MenuLi = styled.li`
  cursor:pointer;
`;

type propsType = {
    title: string,
    onClick: () => void,
}


export function HeaderSideMenuLi(props: propsType) {

    console.log(`HeaderSideMenuLi render`);

    return (
        <MenuLi
            onClick={props.onClick}
        >
            {props.title}
        </MenuLi>
    );
}