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

  return (
    <React.Fragment>
      {
        // 選択中のタグ
        selectedFavoriteVideoTag &&
        <TagButtonComponent
          title={selectedFavoriteVideoTag}
          btnStyle={{
            marginRight: "15px"
          }}
          isDispCross={true}
          onclick={resetTag}
        />
      }
    </React.Fragment>
  );
}