import styled from "styled-components";
import { MEDIA } from "../../../../../consts/MediaConst";
import { HEADER_FONT_SIZE_LARGE, HEADER_FONT_SIZE_SMALL } from "../../../const/HeaderConst";


const Parent = styled.div`
  box-sizing:border-box;
  padding-top:2%;
  height:100%;
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

const HeaderDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: white;
  padding-left: 1%;
  height:4%;
  margin-bottom:6%;
`;

const HeaderTitleSpan = styled.div`
`;

const MainContentDiv = styled.div`
    width: 100%;
    height: 87%;
    box-sizing: border-box;
    color: white;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
`;

const MessageOl = styled.ol`

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

export function HeaderHowToUse() {

  console.log("HeaderHowToUse render");

  return (
    <Parent>
      <HeaderDiv>
        <HeaderTitleSpan>
          使い方
        </HeaderTitleSpan>
      </HeaderDiv>
      <MainContentDiv>
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
      </MainContentDiv>
    </Parent>
  );
}