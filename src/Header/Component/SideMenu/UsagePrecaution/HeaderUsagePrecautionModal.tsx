import React from "react";
import styled from "styled-components";
import { useHeaderUsagePrecautionModal } from "../../../Hook/SideMenu/UsagePrecaution/useHeaderUsagePrecautionModal";
import { HeaderUsagePrecaution } from "./HeaderUsagePrecaution";
import { OverlayDiv } from "../../../../Common/StyledComponent/OverlayDiv";
import { ModalPortal } from "../../../../Common/Component/ModalPortal";


type propsType = {
    closeMenu: () => void
}

export function HeaderUsagePrecautionModal(props: propsType) {

    console.log(`HeaderUsagePrecautionModal render`);

    const { isMobile } = useHeaderUsagePrecautionModal();

    return (
        <ModalPortal
            isOpen={true}
            modalWidth={isMobile ? "86%" : "45%"}
            modalHeight="70%"
        >
            <HeaderUsagePrecaution
                close={props.closeMenu}
            />
        </ModalPortal>
    );
}