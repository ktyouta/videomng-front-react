import React from "react";
import TagButtonComponent from "../../../../../components/TagButtonComponent";
import { useFavoriteVideoFolderSearchSelectedTag } from "../../../hooks/videofolder/searcharea/useFavoriteVideoFolderSearchSelectedTag";


/**
 * 検索条件エリア
 */
export function FavoriteVideoFolderSearchSelectedTag() {

  console.log("FavoriteVideoFolderSearchSelectedTag render");

  const {
    selectedFavoriteVideoTag,
    resetTag } = useFavoriteVideoFolderSearchSelectedTag();

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