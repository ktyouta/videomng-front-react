import { CSSProperties, ReactNode } from "react";
import { IoWarningOutline } from "react-icons/io5";
import styled from "styled-components";
import { DANGER_COLOR } from "../consts/ButtonInteractionConst";
import { Z_INDEX_PARAM } from "../consts/CommonConst";
import { MEDIA } from "../consts/MediaConst";
import { mediaQuery, useMediaQuery } from "../hooks/useMediaQuery";
import { FlexSpaceDiv } from "../styles/styledcomponent/FlexSpaceDiv";
import ButtonComponent from "./ButtonComponent";
import { IconComponent } from "./IconComponent";
import { ModalPortal } from "./ModalPortal";


// 確認モーダル（削除・更新確認等）の共通ライト配色
// backgroundはショートハンドで指定する（ModalContainerの暗いグラデーションを画像レイヤーごと打ち消すため）
export const CONFIRM_MODAL_CONTAINER_STYLE = {
    background: "#e0e0e0",
    borderRadius: "20px",
    border: "solid 1px",
    color: "black",
} as const;

// 警告ヘッダーのアイコンとタイトルの間隔
const WARNING_HEADER_ICON_GAP = "10px";

// 警告ヘッダー（アイコン+「警告」）のフォントサイズ（モバイル・タブレット縦）
const WARNING_HEADER_FONT_SIZE_MOBILE = "16px";

// 警告ヘッダー（アイコン+「警告」）のフォントサイズ（タブレット横・PC。危険操作なので目立たせる）
const WARNING_HEADER_FONT_SIZE_LARGE = "20px";

// 警告ヘッダー・本文・ボタンの各セクション間の余白（線ではなく余白で区切る）
const CONFIRM_SECTION_GAP = "24px";

const Parent = styled.div`
  box-sizing:border-box;
  padding-top:3%;
  display: flex;
  flex-direction:column;
  flex: 1;
`;

const WarningHeaderAreaDiv = styled.div`
  padding-left: 1%;
  margin-bottom: ${CONFIRM_SECTION_GAP};
`;

const WarningHeaderRoot = styled.div`
  display: flex;
  align-items: center;
  gap: ${WARNING_HEADER_ICON_GAP};
  font-size: ${WARNING_HEADER_FONT_SIZE_MOBILE};

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: ${WARNING_HEADER_FONT_SIZE_LARGE};
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: ${WARNING_HEADER_FONT_SIZE_LARGE};
  }
`;

const WarningTitleSpan = styled.span`
  font-weight: 600;
  color: ${DANGER_COLOR};
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
  line-height: 1.7;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: 14px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: 16px;
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: 16px;
  }
`;

const BtnAreaDiv = styled.div`
    width: 100%;
    min-height: 60px;
    box-sizing: border-box;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right:1%;
    margin-top: ${CONFIRM_SECTION_GAP};
`;

// 警告ヘッダー（アイコン+強調色。危険操作の確認モーダル専用）
function WarningHeader(props: { children: ReactNode }) {

    return (
        <WarningHeaderRoot>
            <IconComponent
                icon={IoWarningOutline}
                bgColor={DANGER_COLOR}
                style={{ fontSize: "1.2em" }}
            />
            <WarningTitleSpan>
                {props.children}
            </WarningTitleSpan>
        </WarningHeaderRoot>
    );
}

type propsType = {
    isOpenModal: boolean,
    closeModal: () => void,
    titleMessage: ReactNode,
    clickOk: () => void,
    style?: CSSProperties,
    // 元に戻せない・データが失われる操作の場合にtrueにする（OKボタンが危険色になり、警告アイコンが表示される）
    danger?: boolean,
    // 別のモーダルの上に重ねて表示する場合にtrueにする（オーバーレイを透明にし、土台側と二重に暗転させない）
    nested?: boolean,
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
            theme="light"
            orverlayStyle={props.nested ? { backgroundColor: "transparent" } : undefined}
            containerStyle={{
                ...CONFIRM_MODAL_CONTAINER_STYLE,
                ...props.style,
            }}
            modalWidth={modalWidth}
            modalMinHeight={isPcLess ? "180px" : "230px"}
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
