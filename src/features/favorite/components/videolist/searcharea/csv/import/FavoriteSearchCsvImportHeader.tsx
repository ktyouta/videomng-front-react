import styled from "styled-components";


const Parent = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: white;
  padding-left: 1%;
  margin-bottom: 6%;
`;

const TitleSpan = styled.div`
`;

export function FavoriteSearchCsvImportHeader() {

    console.log("FavoriteSearchCsvImportHeader render");

    return (
        <Parent>
            <TitleSpan>
                お気に入りのインポート
            </TitleSpan>
        </Parent>
    );
}