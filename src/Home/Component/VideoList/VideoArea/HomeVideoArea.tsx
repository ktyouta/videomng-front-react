import React from "react";
import styled from "styled-components";
import { useHomeVideoArea } from "../../../Hook/VideoList/VideoArea/useHomeVideoArea";
import { HomeVideoAreaDefault } from "./Default/HomeVideoAreaDefault";
import Loading from "../../../../Common/Component/Loading";
import { HomeVideoListResult } from "./Result/HomeVideoListResult";
import { HomeVideoSearchWord } from "./Result/HomeVideoSearchWord";
import { HomeVideoAreaResult } from "./Result/HomeVideoAreaResult";


export function HomeVideoArea() {

  console.log("HomeVideoArea render");

  const { nowSearchCondition } = useHomeVideoArea();

  const searchKeyword = nowSearchCondition.keyword;

  return (
    <React.Fragment>
      {
        // 検索前後で表示を切り替える
        searchKeyword
          ?
          // 検索結果表示
          <HomeVideoAreaResult />
          :
          // 初期表示
          <HomeVideoAreaDefault />
      }
    </React.Fragment>
  );
}