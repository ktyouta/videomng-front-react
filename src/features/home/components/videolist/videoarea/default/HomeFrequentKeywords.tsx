import { MdTrendingUp } from "react-icons/md";
import styled from "styled-components";
import { IconComponent } from "../../../../../../components/IconComponent";
import { MEDIA } from "../../../../../../consts/MediaConst";
import { HOME_SEARCH_AREA_LABEL_COLOR } from "../../../../const/HomeConst";
import { useHomeFrequentKeywords } from "../../../../hooks/videolist/videoarea/default/useHomeFrequentKeywords";
import { HomeHistoryWord } from "./HomeHistoryWord";


const Parent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-sizing: border-box;
  width: 100%;
`;

const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${HOME_SEARCH_AREA_LABEL_COLOR};
  font-size: 15px;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: 17px;
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: 17px;
  }
`;

const WordAreaDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  box-sizing: border-box;
  padding-left: 21px;
`;


export function HomeFrequentKeywords() {

  const {
    frequentWordList,
    clickKeyWord,
    deleteKeyWord,
  } = useHomeFrequentKeywords();

  return (
    <Parent>
      <TitleDiv>
        <IconComponent
          icon={MdTrendingUp}
          size="17px"
          bgColor={HOME_SEARCH_AREA_LABEL_COLOR}
        />
        あなたがよく検索するワード
      </TitleDiv>
      <WordAreaDiv>
        {
          frequentWordList && frequentWordList.length > 0 &&
          frequentWordList.map((e) => {
            return (
              <HomeHistoryWord
                keyword={e.keyword}
                clickKeyword={clickKeyWord}
                deleteKeyword={deleteKeyWord}
                key={e.keyword}
              />
            )
          })
        }
      </WordAreaDiv>
    </Parent>
  );
}
