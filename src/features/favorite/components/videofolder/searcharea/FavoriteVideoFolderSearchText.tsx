import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import { ClearableTextbox } from "../../../../../components/ClearableTextbox";
import { IconComponent } from "../../../../../components/IconComponent";
import { useFavoriteVideoFolderSearchText } from "../../../hooks/videofolder/searcharea/useFavoriteVideoFolderSearchText";

// ClearableTextboxのクリアアイコン色（#2C3E50）に合わせて視認性を揃える
const SEARCH_ICON_COLOR = "#2C3E50";

const DEFAULT_MARGIN_RIGHT = "3%";

const Parent = styled.div<{ width: string, marginRight: string }>`
  width: ${({ width }) => (width)};
  display:flex;
  align-items: center;
  gap: 8px;
  height: 39px;
  padding: 0 14px;
  margin-right: ${({ marginRight }) => (marginRight)};
  border-radius: 10px;
  box-sizing: border-box;
  background-color: #ececec;
`;

type propsType = {
  width: string,
  marginRight?: string,
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
    <Parent
      width={props.width}
      marginRight={props.marginRight ?? DEFAULT_MARGIN_RIGHT}
    >
      <IconComponent
        icon={FaSearch}
        size="14px"
        bgColor={SEARCH_ICON_COLOR}
      />
      <ClearableTextbox
        width="100%"
        height="100%"
        textWidth="100%"
        placeholder="タイトルで検索"
        value={inputKeyword}
        onChange={setInputKeyword}
        style={{
          border: "none",
        }}
        textboxStyle={{
          border: "none",
          borderRadius: 0,
        }}
        backgroundColor="transparent"
        clear={clearInput}
        onBlur={filterVideoList}
        onKeyDown={handleKeyPress}
      />
    </Parent>
  );
}
