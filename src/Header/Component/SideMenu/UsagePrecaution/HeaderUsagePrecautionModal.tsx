import React from "react";
import styled from "styled-components";
import { useHeaderUsagePrecautionModal } from "../../../Hook/SideMenu/UsagePrecaution/useHeaderUsagePrecautionModal";
import ModalComponent from "../../../../Common/Component/ModalComponent";
import { HeaderUsagePrecaution } from "./HeaderUsagePrecaution";
import { OverlayDiv } from "../../../../Common/StyledComponent/OverlayDiv";


const MenuLi = styled.li`
  cursor:pointer;
`;


export function HeaderUsagePrecautionModal() {

    console.log(`HeaderUsagePrecautionModal render`);

    const {
        isMobile,
        openUsagePrecautionModal,
        closeUsagePrecautionModal,
        isOpenUsagePrecautionModal, } = useHeaderUsagePrecautionModal();

    return (
        <React.Fragment>
            <MenuLi
                onClick={openUsagePrecautionModal}
            >
                使用上の注意
            </MenuLi>
            {
                // 使用上の注意モーダル
                isOpenUsagePrecautionModal &&
                <ModalComponent
                    modalIsOpen={isOpenUsagePrecautionModal}
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
                        close={closeUsagePrecautionModal}
                    />
                </ModalComponent>
            }
            {
                isOpenUsagePrecautionModal &&
                <OverlayDiv />
            }
        </React.Fragment>
    );
}