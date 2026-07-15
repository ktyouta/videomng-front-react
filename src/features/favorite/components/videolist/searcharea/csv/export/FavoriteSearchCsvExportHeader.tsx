import styled from "styled-components";


const Parent = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: white;
  padding-left: 1%;
  margin-bottom:6%;
`;

const TitleSpan = styled.div`
`;

export function FavoriteSearchCsvExportHeader() {

    console.log("FavoriteSearchCsvExportHeader render");

    return (
        <Parent>
            <TitleSpan>
                お気に入りの取込
            </TitleSpan>
        </Parent>
    );
}