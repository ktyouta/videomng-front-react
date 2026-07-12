import styled from "styled-components";
import { BackToListIcon } from "../../../../components/BackToListIcon";
import Loading from "../../../../components/Loading";
import { MEDIA } from "../../../../consts/MediaConst";
import { mediaQuery, useMediaQuery } from "../../../../hooks/useMediaQuery";
import { useFavoriteVideoDetail } from "../../hooks/videodetail/useFavoriteVideoDetail";
import { FavoriteVideoDetailInfo } from "./FavoriteVideoDetailInfo";
import { FavoriteVideoDetailMenu } from "./FavoriteVideoDetailMenu";

// 戻る矢印の縦位置（モバイル/それ以外）
const BACK_ICON_TOP_MOBILE = "60px";
const BACK_ICON_TOP_DEFAULT = "125px";

const Parent = styled.div`
  width: 100%;
  box-sizing:border-box;
  padding-top:1%;
  position:relative;
`;

const LoadingParent = styled.div`
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%); 
`;

const VideoContentDiv = styled.div`
  width: 100%;
  height: 52%;
  box-sizing:border-box;
  padding-left:6%;
  padding-right:5%;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    display:flex;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    display:flex;
  }

  @media (min-width: ${MEDIA.PC}) {
    display:flex;
  }
`;

const MessageDiv = styled.div`
  color:white;
  position: absolute;
  top: 32%;
  left: 42%;
`;


export function FavoriteVideoDetail() {

  console.log("FavoriteVideoDetail render");

  const {
    isLoading,
    videoDetail,
    errMessage,
    backPage, } = useFavoriteVideoDetail();

  // 画面サイズ判定
  const isMobile = useMediaQuery(mediaQuery.mobile);

  if (!videoDetail) {
    return (
      <LoadingParent>
        <Loading />
      </LoadingParent>
    );
  }

  // ローディング
  if (isLoading) {
    return (
      <LoadingParent>
        <Loading />
      </LoadingParent>
    );
  }

  // 詳細取得エラー
  if (errMessage) {
    return (
      <Parent>
        <MessageDiv>
          {errMessage}
        </MessageDiv>
      </Parent>
    );
  }

  return (
    <Parent>
      <BackToListIcon
        onClick={backPage}
        style={{
          "position": "fixed",
          "top": isMobile ? BACK_ICON_TOP_MOBILE : BACK_ICON_TOP_DEFAULT,
          "left": "3%",
        }}
      />
      <VideoContentDiv>
        {/* 動画情報 */}
        <FavoriteVideoDetailInfo
          videoDetail={videoDetail}
        />
        {/* メニュー */}
        <FavoriteVideoDetailMenu
          videoDetail={videoDetail}
        />
      </VideoContentDiv>
    </Parent>
  );
}