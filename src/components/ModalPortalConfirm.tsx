import { CSSProperties, ReactNode } from "react";
import styled from "styled-components";
import { Z_INDEX_PARAM } from "../consts/CommonConst";
import { MEDIA } from "../consts/MediaConst";
import { CONFIRM_MODAL_CONTAINER_STYLE } from "../consts/ModalConst";
import { mediaQuery, useMediaQuery } from "../hooks/useMediaQuery";
import { FlexSpaceDiv } from "../styles/styledcomponent/FlexSpaceDiv";
import ButtonComponent from "./ButtonComponent";
import { ModalPortal } from "./ModalPortal";
import { WarningHeader } from "./ModalLayout";


const Parent = styled.div`
  box-sizing:border-box;
  padding-top:3%;
  display: flex;
  flex-direction:column;
  flex: 1;
`;

const WarningHeaderAreaDiv = styled.div`
  padding-left: 1%;
  margin-bottom: 2%;
`;

const HeaderDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding-left: 1%;
  flex: 1;
`;

const TitleSpan = styled.div`
  font-size:12px;
  width: 100%;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: 14px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: 14px;
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: 14px;
  }
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
    // 元に戻せない・データが失われる操作の場合にtrueにする（OKボタンが危険色になり、警告アイコンが表示される）
    danger?: boolean,
}

export function ModalPortalConfirm(props: propsType) {

    // 画面サイズ判定
    const isPcLess = useMediaQuery(mediaQuery.pcLess);

    const modalWidth = isPcLess ? "93%" : "29%";

    return (
        <ModalPortal
            isOpen={props.isOpenModal}
            close={props.closeModal}
            isCloseOuter={true}
            containerStyle={{
                ...CONFIRM_MODAL_CONTAINER_STYLE,
                ...props.style,
            }}
            modalWidth={modalWidth}
            modalMinHeight="clamp(240px, 20vh, 300px)"
            zindex={Z_INDEX_PARAM.CONFIRM_MODAL_OVERLAY}
        >
            <Parent>
                {
                    props.danger &&
                    <WarningHeaderAreaDiv>
                        <WarningHeader>
                            警告
                        </WarningHeader>
                    </WarningHeaderAreaDiv>
                }
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
                        size={isPcLess ? "small" : "medium"}
                        onClick={props.closeModal}
                        style={{
                            minWidth: "100px",
                        }}
                    >
                        キャンセル
                    </ButtonComponent>
                    <ButtonComponent
                        variant={props.danger ? "red" : "black"}
                        shape="rounded"
                        size={isPcLess ? "small" : "medium"}
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