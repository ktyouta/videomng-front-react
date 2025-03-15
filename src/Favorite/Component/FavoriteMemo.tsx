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


const Parent = styled.div`
  color:white;
  position: relative;
  padding-bottom: 70px;
  height: 87%;
`;

//ヘッダータイトルのスタイル
const HeaderDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: white;
  padding-left: 1%;
  position:relative;
`;

const HeaderTitleSpan = styled.span`
  font-size:19px;
`;

//コンテンツエリアのスタイル
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

const MemoInputAreaDiv = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding-left: 3%;
  display:flex;
`;

const SearchIconAreaDiv = styled.div`
  background-color:#FF9900;
  width: 4%;
  height: 38px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 15%;
  border-bottom-right-radius: 15%;
  color:#213547;
`;


type propsType = {
    closeModal: () => void
}

export function FavoriteMemo(props: propsType) {

    console.log("FavoriteMemo render");

    const {
        favoriteVideoMemoList } = useFavoriteMemo();

    return (
        <Parent>
            <HeaderDiv>
                <HeaderTitleSpan>
                    メモ
                </HeaderTitleSpan>
                <IconComponent
                    icon={RxCross1}
                    onclick={props.closeModal}
                    style={{
                        "text-align": "right",
                        "position": "absolute",
                        "right": "2%",
                    }}
                />
            </HeaderDiv>
            <ContentAreaDiv>
                {
                    favoriteVideoMemoList && favoriteVideoMemoList.length > 0 ?
                        <MemoListAreaDiv>
                            {
                                favoriteVideoMemoList.map((e: FavoriteVideoMemoType) => {
                                    return (
                                        <FavoriteMemoContent
                                            favoriteVideoMemo={e}
                                        />
                                    )
                                })
                            }
                        </MemoListAreaDiv>
                        :
                        `メモが登録されていません。`
                }
            </ContentAreaDiv>
            <FavoriteMemoInput />
        </Parent>
    );
}