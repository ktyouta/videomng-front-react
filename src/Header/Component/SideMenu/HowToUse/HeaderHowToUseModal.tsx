import React from "react";
import styled from "styled-components";
import { HeaderHowToUse } from "./HeaderHowToUse";
import { OverlayDiv } from "../../../../Common/StyledComponent/OverlayDiv";
import { useHeaderHowToUseModal } from "../../../Hook/SideMenu/HowToUse/useHeaderHowToUseModal";
import { ModalPortal } from "../../../../Common/Component/ModalPortal";


type propsType = {
    closeMenu: () => void
}

export function HeaderHowToUseModal(props: propsType) {

    console.log(`HeaderSideMenuList render`);

    const { isMobile } = useHeaderHowToUseModal();

    return (
        <ModalPortal
            isOpen={true}
            modalWidth={isMobile ? "86%" : "45%"}
            modalHeight="70%"
            isCloseOuter={true}
            close={props.closeMenu}
        >
            <HeaderHowToUse
                close={props.closeMenu}
            />
        </ModalPortal>
    );
}