import styled from "styled-components";
import { MEDIA } from "../../../../../../consts/MediaConst";
import { useHomeRecentKeywords } from "../../../../hooks/videolist/videoarea/default/useHomeRecentKeywords";
import { HomeHistoryWord } from "./HomeHistoryWord";


const Parent = styled.div`
  color:white;
  box-sizing: border-box;
  width: 54%;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    display:flex;
    align-items: center;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    display:flex;
    align-items: center;
  }

  @media (min-width: ${MEDIA.PC}) {
    display:flex;
    align-items: center;
  }
`;

const TitleDiv = styled.div`
  display:flex;
  align-items: center;
  margin-right: 1%;
  white-space: nowrap;
`;

const WordAreaDiv = styled.div`
  flex-wrap: wrap;
  gap: 16px;
  box-sizing: border-box;
  padding-left: 2%;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    display:flex;
    align-items: center;
    padding-left: 0;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    display:flex;
    align-items: center;
    padding-left: 0;
  }

  @media (min-width: ${MEDIA.PC}) {
    display:flex;
    align-items: center;
    padding-left: 0;
  }

`;


export function HomeRecentKeywords() {

  const {
    recentWordList,
    clickKeyWord,
    deleteKeyWord,
  } = useHomeRecentKeywords();

  return (
    <Parent>
      <TitleDiv>
        最近の検索：
      </TitleDiv>
      <WordAreaDiv>
        {
          recentWordList && recentWordList.length > 0 &&
          recentWordList.map((e) => {
            return (
              <HomeHistoryWord
                keyword={e}
                clickKeyword={clickKeyWord}
                deleteKeyword={deleteKeyWord}
                key={e}
              />
            )
          })
        }
      </WordAreaDiv>
    </Parent>
  );
}