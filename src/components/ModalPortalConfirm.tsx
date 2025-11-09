import styled from "styled-components";
import { useConfirmModalComponent } from "../hooks/useConfirmModalComponent";
import { FlexSpaceDiv } from "../styles/styledcomponent/FlexSpaceDiv";
import { IconComponent } from "./IconComponent";
import ButtonComponent from "./ButtonComponent";
import React from "react";
import { OverlayDiv } from "../styles/styledcomponent/OverlayDiv";
import { ModalPortal } from "./ModalPortal";
import { mediaQuery, useMediaQuery } from "../hooks/useMediaQuery";
import { Z_INDEX_PARAM } from "../consts/CommonConst";


const Parent = styled.div`
  box-sizing:border-box;
  padding-top:1%;
  height:100%;
`;

const HeaderDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding-left: 1%;
  height:65%;
`;

const TitleSpan = styled.div`
  font-size:14px;
`;

const BtnAreaDiv = styled.div`
    width: 100%;
    height: 36%;
    box-sizing: border-box;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right:1%;
`;

type propsType = {
    isOpenModal: boolean,
    closeModal: () => void,
    titleMessage: string,
    clickOk: () => void,
}

export function ModalPortalConfirm(props: propsType) {

    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);

    const modalWidth = isMobile ? "82%" : "29%";

    return (
        <ModalPortal
            isOpen={props.isOpenModal}
            containerStyle={{
                backgroundColor: "#e0e0e0",
                borderRadius: "20px",
                border: "solid 1px",
                color: "black",
            }}
            modalWidth={modalWidth}
            modalHeight="30%"
            zindex={Z_INDEX_PARAM.CONFIRM_MODAL_OVERLAY}
        >
            <Parent>
                <HeaderDiv>
                    <TitleSpan>
                        {props.titleMessage}
                    </TitleSpan>
                    <FlexSpaceDiv />
                </HeaderDiv>
                <BtnAreaDiv>
                    <ButtonComponent
                        styleTypeNumber="RUN"
                        title={"キャンセル"}
                        onclick={props.closeModal}
                        style={{
                            "borderRadius": "23px",
                            "background": "black",
                            "fontSize": "1rem",
                        }}
                    />
                    <ButtonComponent
                        styleTypeNumber="RUN"
                        title={"OK"}
                        onclick={props.clickOk}
                        style={{
                            "borderRadius": "23px",
                            "background": "black",
                            "fontSize": "1rem",
                            "marginLeft": "5%",
                        }}
                    />
                </BtnAreaDiv>
            </Parent>
        </ModalPortal>
    );
}