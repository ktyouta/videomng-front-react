import React from "react";
import styled from "styled-components";
import { HomeMetaInfo } from "./HomeMetaInfo";
import { YouTubeDataApiVideoDetailItemType } from "../Type/YouTubeDataApiVideoDetailItemType";
import ComboComponent from "../../Common/Component/ComboComponent";
import { MENU_NO, VIDEO_DETIAL_MENU_LIST } from "../Const/HomeConst";
import { useHomeVideoDetailMenu } from "../Hook/useHomeVideoDetailMenu";
import { HomeComment } from "./HomeComment";


const MenuParentDiv = styled.div`
  width: 75%;
  margin-left: 2%;
  box-sizing:border-box;
  padding-top: 1%;
  padding-left: 3%;
`;


const ComboAreaDiv = styled.div`
  display:flex;
  align-items: center;
  margin-bottom: 3%;
`;

const ComboTitleSpan = styled.span`
  margin-right:2%;
  color: white;
  font-size: 18px;
`;

type propsType = {
  videoDetail: YouTubeDataApiVideoDetailItemType | undefined,
  videoId: string
}


export function HomeVideoDetailMenu(props: propsType) {

  console.log("HomeVideoDetailMenu render");

  const {
    openMenuNo,
    setOpenMenuNo,
  } = useHomeVideoDetailMenu();

  const videoDetail = props.videoDetail;
  // 動画ID
  const videoId = props.videoId;

  return (
    <React.Fragment>
      <MenuParentDiv>
        <ComboAreaDiv>
          <ComboTitleSpan>
            メニュー：
          </ComboTitleSpan>
          <ComboComponent
            combo={VIDEO_DETIAL_MENU_LIST}
            initValue={VIDEO_DETIAL_MENU_LIST[0].value}
            onChange={setOpenMenuNo}
            width="50%"
            minWidth="8%"
            height="39px"
            selectStyle={{
              "backgroundColor": "rgb(24, 26, 30)",
              "color": "white",
            }}
          />
        </ComboAreaDiv>
        {
          // 動画情報
          openMenuNo === MENU_NO.INFO &&
          <HomeMetaInfo
            videoId={videoId}
            videoDetail={videoDetail}
          />
        }
        {
          // 公開コメント
          openMenuNo === MENU_NO.COMMENT &&
          <HomeComment
            videoId={videoId}
          />
        }
      </MenuParentDiv>
    </React.Fragment>
  );
}