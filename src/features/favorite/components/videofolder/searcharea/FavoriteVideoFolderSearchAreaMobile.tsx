import styled from "styled-components";

const Parent = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-left: 6%;
`;

const SearchParentDiv = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 4%;
  margin-top: 10px;
`;


/**
 * 検索条件エリア
 */
export function FavoriteVideoFolderSearchAreaMobile() {

  console.log("FavoriteVideoFolderSearchAreaMobile render");

  return (
    <Parent>
      <SearchParentDiv>
      </SearchParentDiv>
    </Parent>
  );
}