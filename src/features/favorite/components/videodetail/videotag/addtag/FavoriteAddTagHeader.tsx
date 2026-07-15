import styled from "styled-components";


const Parent = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: white;
  padding-left: 1%;
  margin-bottom: 2%;
`;

const TitleSpan = styled.div`
`;

export function FavoriteAddTagHeader() {

    console.log("FavoriteAddTagHeader render");

    return (
        <Parent>
            <TitleSpan>
                タグを追加
            </TitleSpan>
        </Parent>
    );
}