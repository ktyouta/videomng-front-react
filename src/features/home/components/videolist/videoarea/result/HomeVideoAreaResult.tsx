import styled from "styled-components";
import Loading from "../../../../../../components/Loading";
import { MEDIA } from "../../../../../../consts/MediaConst";
import { useHomeVideoAreaResult } from "../../../../hooks/videolist/videoarea/result/useHomeVideoAreaResult";
import { HomeVideoListResult } from "./HomeVideoListResult";
import { HomeVideoSearchWord } from "./HomeVideoSearchWord";


const Parent = styled.div`
  width: 100%;
  height: 90%;
  margin-top: 35px;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    margin-top: 75px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    margin-top: 75px;
  }

  @media (min-width: ${MEDIA.PC}) {
    margin-top: 75px;
  }
`;

const LoadingParent = styled.div`
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%); 
`;

const MessageDiv = styled.div`
  color:white;
  display:flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin-top: 5%;
  font-size: 17px;
`;

function VideoLoading() {

    return (
        <LoadingParent>
            <Loading />
        </LoadingParent>
    );
}

export function HomeVideoAreaResult() {

    console.log("HomeVideoAreaResult render");

    const {
        videoListData,
        isLoading,
        nowSearchCondition,
        isFetching,
        isError } = useHomeVideoAreaResult();

    // 初回検索ローディング
    if (!nowSearchCondition.nextPageToken && (isLoading || isFetching)) {
        return <VideoLoading />
    }

    if (isError) {
        return (
            <MessageDiv>
                動画情報の取得に失敗しました。
            </MessageDiv>
        );
    }

    // 動画リスト
    const videoListItems = videoListData?.items;

    if (!videoListItems || videoListItems.length === 0) {
        return (
            <MessageDiv>
                検索結果が存在しません。
            </MessageDiv>
        );
    }

    return (
        <Parent>
            {/* 検索ワード */}
            <HomeVideoSearchWord
                searchKeyword={nowSearchCondition.keyword}
            />
            {/* 動画検索結果 */}
            <HomeVideoListResult
                videoListData={videoListData}
                isLoading={isLoading}
            />
        </Parent>
    );
}