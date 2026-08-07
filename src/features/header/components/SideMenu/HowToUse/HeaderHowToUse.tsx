import { IoHelpCircleOutline } from "react-icons/io5";
import styled from "styled-components";
import { ModalPortal } from "../../../../../components/ModalPortal";
import { MEDIA } from "../../../../../consts/MediaConst";
import { HEADER_FONT_SIZE_LARGE, HEADER_FONT_SIZE_SMALL } from "../../../const/HeaderConst";


const MessageOl = styled.ol`
  font-size: ${HEADER_FONT_SIZE_SMALL};

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: ${HEADER_FONT_SIZE_SMALL};
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: ${HEADER_FONT_SIZE_LARGE};
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: ${HEADER_FONT_SIZE_LARGE};
  }
`;

const MessageLi = styled.li`
  margin-bottom: 6%;
  display: flex;
  align-items: flex-start;
`;

const StepSpan = styled.span`
  color: white;
  font-weight: bold;
  margin-right: 0.75rem;
`;

type propsType = {
  isOpen: boolean,
  close: () => void,
  isMobile: boolean,
}

export function HeaderHowToUse(props: propsType) {

  console.log("HeaderHowToUse render");

  return (
    <ModalPortal
      isOpen={props.isOpen}
      modalWidth={props.isMobile ? "93%" : "45%"}
      modalMinHeight="70%"
      isCloseOuter={true}
      close={props.close}
      title="使い方"
      titleIcon={IoHelpCircleOutline}
    >
      <MessageOl>
        <MessageLi>
          <StepSpan>
            1
          </StepSpan>
          ホーム画面でキーワードを入力し、動画を検索します。
        </MessageLi>
        <MessageLi>
          <StepSpan>
            2
          </StepSpan>
          気になる動画を選択すると、詳細画面に遷移します。
        </MessageLi>
        <MessageLi>
          <StepSpan>
            3
          </StepSpan>
          詳細画面から「お気に入り」に登録できます（ログインが必要）。
        </MessageLi>
        <MessageLi>
          <StepSpan>
            4
          </StepSpan>
          お気に入り登録後、「お気に入り」画面から設定の変更が可能です。
        </MessageLi>
        <MessageLi>
          <StepSpan>
            5
          </StepSpan>
          「お気に入り」画面でフォルダの作成ができます。フォルダを使うことで動画を目的ごとに整理し、より快適に管理できます。
        </MessageLi>
      </MessageOl>
    </ModalPortal>
  );
}
