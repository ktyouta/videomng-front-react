import React from "react";
import styled from "styled-components";
import { useHeaderUsagePrecautionModal } from "../../../Hook/SideMenu/UsagePrecaution/useHeaderUsagePrecautionModal";
import ModalComponent from "../../../../Common/Component/ModalComponent";
import { HeaderUsagePrecaution } from "./HeaderUsagePrecaution";
import { OverlayDiv } from "../../../../Common/StyledComponent/OverlayDiv";


type propsType = {
    closeMenu: () => void
}

export function HeaderUsagePrecautionModal(props: propsType) {

    console.log(`HeaderUsagePrecautionModal render`);

    const {
        isMobile,
        closeUsagePrecautionModal, } = useHeaderUsagePrecautionModal();

    return (
        <React.Fragment>
            <ModalComponent
                modalIsOpen={true}
                closeModal={closeUsagePrecautionModal}
                style={{
                    backgroundColor: "#181a1e",
                    borderRadius: "1%",
                    border: "solid 1px",
                    color: "white",
                    overflowY: "hidden",
                }}
                width={isMobile ? "73%" : "47%"}
                height="65%"
                isPositionCenter={true}
            >
                <HeaderUsagePrecaution
                    close={props.closeMenu}
                />
            </ModalComponent>
        </React.Fragment>
    );
}