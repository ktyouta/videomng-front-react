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
import { HeaderSideMenuLi } from "./HeaderSideMenuLi";



type propsType = {
    openMenuNo: MENU_NO,
    closeMenu: () => void
}

export function HeaderSideMenuModal(props: propsType) {

    console.log(`HeaderSideMenuModal render`);

    return (
        <React.Fragment>
            {
                // 使い方を見る
                props.openMenuNo === MENU_NO.HOW_TO_USE &&
                <HeaderHowToUseModal
                    closeMenu={props.closeMenu}
                />
            }
            {
                // 使用上の注意
                props.openMenuNo === MENU_NO.USE_PRECAUTION &&
                <HeaderUsagePrecautionModal
                    closeMenu={props.closeMenu}
                />
            }
        </React.Fragment>
    );
}