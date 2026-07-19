import React from "react";
import styled from "styled-components";
import ButtonComponent from "../../../../../../../components/ButtonComponent";
import { MEDIA } from "../../../../../../../consts/MediaConst";
import { useFavoriteSearchCsvImportFooter } from "../../../../../hooks/videolist/searcharea/csv/import/useFavoriteSearchCsvImportFooter";


const HeaderDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: white;
  padding-left: 1%;
  height:4%;
  margin-bottom: 4%;
`;

const HeaderTitleSpan = styled.div`
`;

const MessageDiv = styled.div`
    width: 100%;
    box-sizing: border-box;
    color: white;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    padding: 0 5%;
    line-height: 2.0;
    flex: 1;
`;

const FooterDiv = styled.div`
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right:1%;

    @media (min-width: ${MEDIA.TABLET}) {
        height: 45px;
    }
`;

type propsType = {
  close: () => void;
  isMobile: boolean;
}

export function FavoriteSearchCsvImport(props: propsType) {

  console.log("FavoriteSearchCsvImport render");

  const { download } = useFavoriteSearchCsvImportFooter({ ...props });

  return (
    <React.Fragment>
      {/* ヘッダー */}
      <HeaderDiv>
        <HeaderTitleSpan>
          お気に入りのインポート
        </HeaderTitleSpan>
      </HeaderDiv>
      {/* 説明文 */}
      <MessageDiv>
        ダウンロードボタンを押下すると、現在登録されているお気に入り動画のデータをCSVファイルとしてダウンロードできます。<br />
        ダウンロードしたファイルを使うと、お気に入りに一括登録することができます。<br />
        ダウンロードしたCSVには動画タイトルなどの情報は含まれず、動画IDのみが保存されます。<br />
        アップロードはお気に入り画面の取込からできます。
      </MessageDiv>
      {/* フッター */}
      <FooterDiv>
        <ButtonComponent
          shape="rounded"
          size={props.isMobile ? "small" : "medium"}
          onClick={props.close}
          style={{
            background: "#3a3d42",
            color: "white"
          }}
        >
          キャンセル
        </ButtonComponent>
        <ButtonComponent
          shape="rounded"
          size={props.isMobile ? "small" : "medium"}
          onClick={download}
          style={{
            background: "#3a3d42",
            marginLeft: "5%",
            color: "white"
          }}
        >
          ダウンロード
        </ButtonComponent>
      </FooterDiv>
    </React.Fragment>
  );
}