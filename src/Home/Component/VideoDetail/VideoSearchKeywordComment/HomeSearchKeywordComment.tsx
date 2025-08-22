import React from "react";
import { IconComponent } from "../../../../Common/Component/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import { HomeSearchKeywordCommentInput } from "./HomeSearchKeywordCommentInput";
import { HomeSearchKeywordCommentList } from "./HomeSearchKeywordCommentList";


const Parent = styled.div`
  box-sizing:border-box;
  height: 502px;
  background-color: #181a1e;
  border-radius: 1%;
  border: solid 1px;
  position:relative;
`;



export function HomeSearchKeywordComment() {

  console.log("HomeSearchKeywordComment render");

  return (
    <Parent>
      {/* コメントリスト */}
      <HomeSearchKeywordCommentList />
      {/* 入力欄 */}
      <HomeSearchKeywordCommentInput />
    </Parent>
  );
}