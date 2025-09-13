import styled from "styled-components";
import ButtonComponent from "../../../../Common/Component/ButtonComponent";
import ModalComponent from "../../../../Common/Component/ModalComponent";
import { OverlayDiv } from "../../../../Common/StyledComponent/OverlayDiv";
import { FavoriteSearchCondition } from "./Filter/FavoriteSearchCondition";
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

  const { selectedFavoriteVideoTag } = useFavoriteSearchSelectedTag();

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
        />
      }
    </React.Fragment>
  );
}