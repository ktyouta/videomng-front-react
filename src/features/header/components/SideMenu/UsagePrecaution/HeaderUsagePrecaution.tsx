import styled from "styled-components";
import { MEDIA } from "../../../../../consts/MediaConst";


const Parent = styled.div`
  box-sizing:border-box;
  padding-top:2%;
  height:100%;
  font-size: 13px;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: 13px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: 16px;
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: 16px;
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
    padding: 0 5%;
    line-height: 2.0;
`;

export function HeaderUsagePrecaution() {

  console.log("HeaderUsagePrecaution render");

  return (
    <Parent>
      <HeaderDiv>
        <HeaderTitleSpan>
          使用上の注意
        </HeaderTitleSpan>
      </HeaderDiv>
      <MainContentDiv>
        本サービスは、YouTube Data API を利用して動画情報を取得しています。<br />
        API の利用には制限があり、一定時間内に大量のアクセスを行うと、一時的に動画情報が取得できなくなる場合があります。<br />
        また、YouTube側の仕様変更や動画の削除等により、表示内容が実際のYouTubeと異なる場合があります。<br />
        本サービスの利用により生じたいかなる損害についても、当方は一切の責任を負いません。<br />
        安定した利用のため、推奨ブラウザでのご利用をお勧めします。<br />
      </MainContentDiv>
    </Parent>
  );
}