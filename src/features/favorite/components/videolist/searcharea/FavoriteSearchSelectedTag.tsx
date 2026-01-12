import React from "react";
import TagButtonComponent from "../../../../../components/TagButtonComponent";
import { DEFAULT_TAG_COLOR } from "../../../const/FavoriteConst";
import { useFavoriteSearchSelectedTag } from "../../../hooks/videolist/searcharea/useFavoriteSearchSelectedTag";


/**
 * 検索条件エリア
 */
export function FavoriteSearchSelectedTag() {

  console.log("FavoriteSearchSelectedTag render");

  const {
    selectedFavoriteVideoTag,
    resetTag,
    tagMasterList, } = useFavoriteSearchSelectedTag();

  const tagList = selectedFavoriteVideoTag ? selectedFavoriteVideoTag.split(`,`) : [];

  return (
    <React.Fragment>
      {
        // 選択中のタグ
        tagMasterList && tagMasterList.length > 0 &&
        tagList && tagList.length > 0 &&
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
    </React.Fragment>
  );
}