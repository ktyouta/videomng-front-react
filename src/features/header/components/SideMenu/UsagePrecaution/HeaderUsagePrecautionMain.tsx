import styled from "styled-components";
import ComboComponent, { comboType } from "../../../../../components/ComboComponent";
import { VideoCategoryItemType } from "../../../../main/types/VideoCategoryItemType";


const Parent = styled.div`
    width: 100%;
    height: 87%;
    box-sizing: border-box;
    color: white;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    padding: 0 5%;
    line-height: 2.0;
`;

export function HeaderUsagePrecautionMain() {

    console.log("HeaderUsagePrecautionMain render");

    return (
        <Parent>
            本サービスは、YouTube Data API を利用して動画情報を取得しています。<br />
            API の利用には制限があり、一定時間内に大量のアクセスを行うと、一時的に動画情報が取得できなくなる場合があります。<br />
            また、YouTube側の仕様変更や動画の削除等により、表示内容が実際のYouTubeと異なる場合があります。<br />
            本サービスの利用により生じたいかなる損害についても、当方は一切の責任を負いません。<br />
            安定した利用のため、推奨ブラウザでのご利用をお勧めします。<br />
        </Parent>
    );
}