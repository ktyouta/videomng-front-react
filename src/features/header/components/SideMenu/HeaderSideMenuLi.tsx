import React from "react";
import styled from "styled-components";
import { IconComponent } from "../../../../components/IconComponent";
import { RxCross1 } from "react-icons/rx";
import { MEDIA } from "../../../../consts/MediaConst";
import { HeaderHowToUseModal } from "./HowToUse/HeaderHowToUseModal";
import { HeaderUsagePrecautionModal } from "./UsagePrecaution/HeaderUsagePrecautionModal";
import { MENU_NO } from "../../const/HeaderConst";
import { RxHamburgerMenu } from "react-icons/rx";
import { useHeaderSideMenu } from "../../hooks/SideMenu/useHeaderSideMenu";
import { OverlayDiv } from "../../../../styles/styledcomponent/OverlayDiv";


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