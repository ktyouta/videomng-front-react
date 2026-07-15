import styled from "styled-components";


//ヘッダータイトルのスタイル
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

const TitleSpan = styled.div`
`;


export function FavoriteVideoFolderSearchConditionHeader() {

    console.log("FavoriteVideoFolderSearchConditionHeader render");

    return (
        <HeaderDiv>
            <TitleSpan>
                フィルター
            </TitleSpan>
        </HeaderDiv>
    );
}