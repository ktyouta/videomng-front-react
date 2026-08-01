import styled from "styled-components";
import { MEDIA } from "../../../consts/MediaConst";

const Parent = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-sizing: border-box;
  padding-bottom: 1%;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    height:120px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    height:120px;
  }

  @media (min-width: ${MEDIA.PC}) {
    height:120px;
  }
`;

const TermOfUseMessageAreaDiv = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 10px;
  box-sizing: border-box;
  padding-left: 1%;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: 11px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: 11px;
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: 13px;
  }
`;


export function Footer() {

  console.log("Footer render");

  return (
    <Parent>
      <TermOfUseMessageAreaDiv>
        このアプリは YouTube Data API を利用しており、表示されるコンテンツは YouTube の提供するデータに基づいています。<br />
        本アプリは YouTube 公式サービスではありません。
      </TermOfUseMessageAreaDiv>
    </Parent>
  );
}