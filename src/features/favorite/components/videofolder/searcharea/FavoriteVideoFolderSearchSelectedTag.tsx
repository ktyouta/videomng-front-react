import styled from "styled-components";
import TagButtonComponent from "../../../../../components/TagButtonComponent";
import {
  DEFAULT_TAG_COLOR,
  FAVORITE_SEARCH_AREA_PANEL_BG,
  FAVORITE_SEARCH_AREA_PANEL_BORDER,
  FAVORITE_SEARCH_AREA_PANEL_SHADOW,
} from "../../../const/FavoriteConst";
import { useFavoriteVideoFolderSearchSelectedTag } from "../../../hooks/videofolder/searcharea/useFavoriteVideoFolderSearchSelectedTag";


const PanelDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 14px 14px;
  border-radius: 12px;
  background-color: ${FAVORITE_SEARCH_AREA_PANEL_BG};
  border: 1px solid ${FAVORITE_SEARCH_AREA_PANEL_BORDER};
  box-shadow: ${FAVORITE_SEARCH_AREA_PANEL_SHADOW};
`;

/**
 * 検索条件エリア
 */
export function FavoriteVideoFolderSearchSelectedTag() {

  console.log("FavoriteVideoFolderSearchSelectedTag render");

  const {
    selectedFavoriteVideoTag,
    resetTag,
    tagMasterList, } = useFavoriteVideoFolderSearchSelectedTag();

  const tagList = selectedFavoriteVideoTag ? selectedFavoriteVideoTag.split(`,`) : [];

  const hasSelectedTag = tagMasterList && tagMasterList.length > 0 && tagList && tagList.length > 0;

  if (!hasSelectedTag) {
    return null;
  }

  return (
    <PanelDiv>
      {
        tagList.map((e) => {

          const tagInfo = tagMasterList.find((e1) => e1.value === e);

          return (
            <TagButtonComponent
              title={e}
              key={e}
              btnStyle={{
                marginRight: "15px",
                marginBottom: "5px"
              }}
              isDispCross={true}
              onclick={() => {
                resetTag(e);
              }}
              tagColor={tagInfo?.tagColor ?? DEFAULT_TAG_COLOR}
            />
          )
        })
      }
    </PanelDiv>
  );
}