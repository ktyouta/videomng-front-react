import React from "react";
import { IconComponent } from "../../Common/Component/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import { useFavoriteMemo } from "../Hook/useFavoriteMemo";
import { FavoriteVideoMemoType } from "../Type/FavoriteVideoMemoType";
import { FavoriteMemoContent } from "./FavoriteMemoContent";
import BaseTextbox from "../../Common/Component/BaseTextbox";
import { FaArrowUp } from "react-icons/fa";
import { FavoriteMemoCreateInput } from "./FavoriteMemoCreateInput";
import { FavoriteMemoHeader } from "./FavoriteMemoHeader";
import { FavoriteMemoList } from "./FavoriteMemoList";


const Parent = styled.div`
  color:white;
  position: relative;
  padding-bottom: 70px;
  height: 87%;
`;


type propsType = {
  closeModal: () => void,
  videoId: string,
}

export function FavoriteMemo(props: propsType) {

  console.log("FavoriteMemo render");

  return (
    <Parent>
      {/* ヘッダ */}
      <FavoriteMemoHeader
        closeModal={props.closeModal}
      />
      {/* メモリスト */}
      <FavoriteMemoList
        videoId={props.videoId}
      />
      {/* 入力欄 */}
      <FavoriteMemoCreateInput
        videoId={props.videoId}
      />
    </Parent>
  );
}