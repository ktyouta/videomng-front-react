import React from "react";
import styled from "styled-components";
import ModalComponent from "../../../../Common/Component/ModalComponent";
import { HeaderHowToUse } from "./HeaderHowToUse";
import { OverlayDiv } from "../../../../Common/StyledComponent/OverlayDiv";
import { useHeaderHowToUseModal } from "../../../Hook/SideMenu/HowToUse/useHeaderHowToUseModal";


const MenuLi = styled.li`
  cursor:pointer;
`;


export function HeaderHowToUseModal() {

    console.log(`HeaderSideMenuList render`);

    const {
        isOpenHowToUseModal,
        openHowToUseModal,
        closeHowToUseModal,
        isMobile, } = useHeaderHowToUseModal();


    return (
        <React.Fragment>
            <MenuLi
                onClick={openHowToUseModal}
            >
                使い方を見る
            </MenuLi>
            {
                // 使い方を見るモーダル
                isOpenHowToUseModal &&
                <ModalComponent
                    modalIsOpen={isOpenHowToUseModal}
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
                        close={closeHowToUseModal}
                    />
                </ModalComponent>
            }
            {
                isOpenHowToUseModal &&
                <OverlayDiv />
            }
        </React.Fragment>
    );
}