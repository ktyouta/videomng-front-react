import styled from "styled-components";
import { ClearableTextbox } from "../../../../../components/ClearableTextbox";
import { MEDIA } from "../../../../../consts/MediaConst";
import { useFavoriteVideoFolderSearchText } from "../../../hooks/videofolder/searcharea/useFavoriteVideoFolderSearchText";


const Parent = styled.div`
  flex: 0 1 500px;
  display:flex;
  align-items: center;
  box-sizing: border-box;
  margin-right:3%;
`;

const TitleSpan = styled.span`
  margin-right:7px;
  color: white;
  font-size: 12px;
  white-space: nowrap;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: 13px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: 16px;
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: 16px;
  }
`;

type propsType = {
  width: string,
}

export function FavoriteVideoFolderSearchText(props: propsType) {

  console.log(`FavoriteVideoFolderSearchText render`);

  const {
    inputKeyword,
    setInputKeyword,
    clearInput,
    filterVideoList,
    handleKeyPress } = useFavoriteVideoFolderSearchText();

  return (
    <Parent>
      <TitleSpan>
        タイトル：
      </TitleSpan>
      <ClearableTextbox
        width={props.width}
        height="99%"
        textWidth="90%"
        placeholder=""
        value={inputKeyword}
        onChange={setInputKeyword}
        style={{
          borderRadius: 6,
        }}
        backgroundColor="#ececec"
        clear={clearInput}
        onBlur={filterVideoList}
        onKeyDown={handleKeyPress}
      />
    </Parent>
  );
}