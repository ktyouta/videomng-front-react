import TagButtonComponent from "../../../../../components/TagButtonComponent";
import { FlexSpaceDiv } from "../../../../../styles/styledcomponent/FlexSpaceDiv";
import ComboComponent from "../../../../../components/ComboComponent";
import React from "react";
import { FaFilter } from 'react-icons/fa';
import { IconComponent } from "../../../../../components/IconComponent";
import { MEDIA } from "../../../../../consts/MediaConst";
import { FavoriteSearchFilterModal } from "./filter/FavoriteSearchFilterModal";
import { FavoriteSearchSortArea } from "./FavoriteSearchSortArea";
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