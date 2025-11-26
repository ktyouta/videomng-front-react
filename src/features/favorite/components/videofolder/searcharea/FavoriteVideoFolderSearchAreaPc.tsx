import styled from "styled-components";
import React from "react";


const Parent = styled.div`
  width: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-right: 13%;
  padding-left: 9%;
`;

const SearchParentDiv = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  box-sizing: border-box;
  padding-right: 13%;
  padding-left: 9%;
  margin-top:1%;
`;


/**
 * 検索条件エリア
 */
export function FavoriteVideoFolderSearchAreaPc() {

  console.log("FavoriteVideoFolderSearchAreaPc render");

  return (
    <React.Fragment>
      <Parent>
      </Parent>
      <SearchParentDiv>
      </SearchParentDiv>
    </React.Fragment>
  );
}