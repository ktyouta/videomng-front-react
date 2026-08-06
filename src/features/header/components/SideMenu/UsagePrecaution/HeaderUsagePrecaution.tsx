import { IoWarningOutline } from "react-icons/io5";
import styled from "styled-components";
import { ModalBody, ModalHeader } from "../../../../../components/ModalLayout";
import { MEDIA } from "../../../../../consts/MediaConst";
import { HEADER_FONT_SIZE_LARGE, HEADER_FONT_SIZE_SMALL } from "../../../const/HeaderConst";


const Parent = styled.div`
  box-sizing:border-box;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
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

const MessageDiv = styled.div`
    width: 100%;
    box-sizing: border-box;
    color: white;
    padding: 0 5%;
    line-height: 2.0;
`;

export function HeaderUsagePrecaution() {

  console.log("HeaderUsagePrecaution render");

  return (
    <Parent>
      <ModalHeader icon={IoWarningOutline}>
        使用上の注意
      </ModalHeader>
      <ModalBody>
        <MessageDiv>
          本サービスは、YouTube Data API を利用して動画情報を取得しています。<br />
          API の利用には制限があり、一定時間内に大量のアクセスを行うと、一時的に動画情報が取得できなくなる場合があります。<br />
          また、YouTube側の仕様変更や動画の削除等により、表示内容が実際のYouTubeと異なる場合があります。<br />
          本サービスの利用により生じたいかなる損害についても、当方は一切の責任を負いません。<br />
          安定した利用のため、推奨ブラウザでのご利用をお勧めします。<br />
        </MessageDiv>
      </ModalBody>
    </Parent>
  );
}