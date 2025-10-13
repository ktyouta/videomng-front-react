import TagButtonComponent from "../../../../Common/Component/TagButtonComponent";
import { FlexSpaceDiv } from "../../../../Common/StyledComponent/FlexSpaceDiv";
import ComboComponent from "../../../../Common/Component/ComboComponent";
import React from "react";
import { FaFilter } from 'react-icons/fa';
import { IconComponent } from "../../../../Common/Component/IconComponent";
import { MEDIA } from "../../../../Common/Const/MediaConst";
import { FavoriteSearchFilterModal } from "./Filter/FavoriteSearchFilterModal";
import { FavoriteSearchSortArea } from "./FavoriteSearchSortArea";
import { useFavoriteSearchSelectedTag } from "../../../Hook/VideoList/SearchArea/useFavoriteSearchSelectedTag";


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