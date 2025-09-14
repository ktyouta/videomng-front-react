import React from "react";
import styled from "styled-components";
import ModalComponent from "../../../../Common/Component/ModalComponent";
import { HeaderHowToUse } from "./HeaderHowToUse";
import { OverlayDiv } from "../../../../Common/StyledComponent/OverlayDiv";
import { useHeaderHowToUseModal } from "../../../Hook/SideMenu/HowToUse/useHeaderHowToUseModal";


type propsType = {
    closeMenu: () => void
}

export function HeaderHowToUseModal(props: propsType) {

    console.log(`HeaderSideMenuList render`);

    const {
        closeHowToUseModal,
        isMobile, } = useHeaderHowToUseModal();

    return (
        <React.Fragment>
            <ModalComponent
                modalIsOpen={true}
                closeModal={closeHowToUseModal}
                style={{
                    backgroundColor: "#181a1e",
                    borderRadius: "1%",
                    border: "solid 1px",
                    color: "white",
                    overflowY: "hidden",
                }}
                width={isMobile ? "73%" : "42%"}
                height="65%"
                isPositionCenter={true}
            >
                <HeaderHowToUse
                    close={props.closeMenu}
                />
            </ModalComponent>
        </React.Fragment>
    );
}