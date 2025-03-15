import React from "react";
import { IconComponent } from "../../Common/Component/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import { useFavoriteMemo } from "../Hook/useFavoriteMemo";
import { FavoriteVideoMemoType } from "../Type/FavoriteVideoMemoType";
import { FavoriteMemoContent } from "./FavoriteMemoContent";
import BaseTextbox from "../../Common/Component/BaseTextbox";
import { FaArrowUp } from "react-icons/fa";
import { FavoriteMemoInput } from "./FavoriteMemoInput";
import { FavoriteMemoHeader } from "./FavoriteMemoHeader";
import { FavoriteMemoList } from "./FavoriteMemoList";


const Parent = styled.div`
  color:white;
  position: relative;
  padding-bottom: 70px;
  height: 87%;
`;

const ContentAreaDiv = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-left: 2%;
  padding-top: 2%;
  padding-right: 2%;
`;

const MemoListAreaDiv = styled.div`
  width: 97%;
  height: 90%;
  overflow: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  padding: 2% 1% 1% 1%;
`;



type propsType = {
    closeModal: () => void
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
            <FavoriteMemoList />
            {/* 入力欄 */}
            <FavoriteMemoInput />
        </Parent>
    );
}