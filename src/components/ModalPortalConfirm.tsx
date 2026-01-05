import { CSSProperties, ReactNode } from "react";
import styled from "styled-components";
import { Z_INDEX_PARAM } from "../consts/CommonConst";
import { mediaQuery, useMediaQuery } from "../hooks/useMediaQuery";
import { FlexSpaceDiv } from "../styles/styledcomponent/FlexSpaceDiv";
import ButtonComponent from "./ButtonComponent";
import { ModalPortal } from "./ModalPortal";


const Parent = styled.div`
  box-sizing:border-box;
  padding-top:3%;
  display: flex;
  flex-direction:column;
  flex: 1;
`;

const HeaderDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding-left: 1%;
  flex: 1;
`;

const TitleSpan = styled.div`
  font-size:14px;
  width: 100%;
`;

const BtnAreaDiv = styled.div`
    width: 100%;
    height: 60px;
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
    titleMessage: ReactNode,
    clickOk: () => void,
    style?: CSSProperties,
}

export function ModalPortalConfirm(props: propsType) {

    // 画面サイズ判定
    const isPcLess = useMediaQuery(mediaQuery.pcLess);

    const modalWidth = isPcLess ? "82%" : "29%";

    return (
        <ModalPortal
            isOpen={props.isOpenModal}
            containerStyle={{
                backgroundColor: "#e0e0e0",
                borderRadius: "20px",
                border: "solid 1px",
                color: "black",
                ...props.style,
            }}
            modalWidth={modalWidth}
            modalMinHeight="clamp(240px, 20vh, 300px)"
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
                        variant="black"
                        shape="rounded"
                        onClick={props.closeModal}
                        style={{
                            minWidth: "100px",
                        }}
                    >
                        キャンセル
                    </ButtonComponent>
                    <ButtonComponent
                        variant="black"
                        shape="rounded"
                        onClick={props.clickOk}
                        style={{
                            marginLeft: "5%",
                            minWidth: "100px",
                        }}
                    >
                        OK
                    </ButtonComponent>
                </BtnAreaDiv>
            </Parent>
        </ModalPortal>
    );
}