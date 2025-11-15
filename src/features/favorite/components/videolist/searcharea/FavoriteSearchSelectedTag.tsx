import TagButtonComponent from "../../../../../components/TagButtonComponent";
import React from "react";
import { useFavoriteSearchSelectedTag } from "../../../hooks/videolist/searcharea/useFavoriteSearchSelectedTag";


/**
 * 検索条件エリア
 */
export function FavoriteSearchSelectedTag() {

  console.log("FavoriteSearchSelectedTag render");

  const {
    selectedFavoriteVideoTag,
    resetTag } = useFavoriteSearchSelectedTag();

  const tagList = selectedFavoriteVideoTag ? selectedFavoriteVideoTag.split(`,`) : [];

  return (
    <React.Fragment>
      {
        // 選択中のタグ
        tagList && tagList.length > 0 &&
        tagList.map((e) => {
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
            />
          )
        })
      }
    </React.Fragment>
  );
}