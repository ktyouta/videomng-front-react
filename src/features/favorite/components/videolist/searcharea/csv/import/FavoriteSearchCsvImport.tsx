import React from "react";
import { FiDownload } from "react-icons/fi";
import styled from "styled-components";
import ButtonComponent from "../../../../../../../components/ButtonComponent";
import { ModalBody, ModalFooter, ModalHeader } from "../../../../../../../components/ModalLayout";
import { useFavoriteSearchCsvImportFooter } from "../../../../../hooks/videolist/searcharea/csv/import/useFavoriteSearchCsvImportFooter";


const MessageDiv = styled.div`
    width: 100%;
    box-sizing: border-box;
    color: white;
    padding: 0 5%;
    line-height: 2.0;
`;

type propsType = {
  close: () => void;
}

export function FavoriteSearchCsvImport(props: propsType) {

  console.log("FavoriteSearchCsvImport render");

  const { download } = useFavoriteSearchCsvImportFooter({ ...props });

  return (
    <React.Fragment>
      {/* ヘッダー */}
      <ModalHeader icon={FiDownload}>
        お気に入りのインポート
      </ModalHeader>
      {/* 説明文 */}
      <ModalBody>
        <MessageDiv>
          ダウンロードボタンを押下すると、現在登録されているお気に入り動画のデータをCSVファイルとしてダウンロードできます。<br />
          ダウンロードしたファイルを使うと、お気に入りに一括登録することができます。<br />
          ダウンロードしたCSVには動画タイトルなどの情報は含まれず、動画IDのみが保存されます。<br />
          アップロードはお気に入り画面の取込からできます。
        </MessageDiv>
      </ModalBody>
      {/* フッター */}
      <ModalFooter>
        <ButtonComponent
          shape="rounded"
          size="medium"
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
          size="medium"
          onClick={download}
          style={{
            background: "#3a3d42",
            color: "white"
          }}
        >
          ダウンロード
        </ButtonComponent>
      </ModalFooter>
    </React.Fragment>
  );
}