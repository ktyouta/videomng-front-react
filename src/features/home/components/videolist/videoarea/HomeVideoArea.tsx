import React from "react";
import { useHomeVideoArea } from "../../../hooks/videolist/videoarea/useHomeVideoArea";
import { HomeVideoAreaDefault } from "./default/HomeVideoAreaDefault";
import { HomeVideoAreaResult } from "./result/HomeVideoAreaResult";


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