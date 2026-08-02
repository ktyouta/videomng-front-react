import styled from "styled-components";
import { FavoriteTagGuide } from "./FavoriteTagGuide";
import { FavoriteTagList } from "./FavoriteTagList";
import { FavoriteTagViewActions } from "./FavoriteTagViewActions";


const RelativeDiv = styled.div`
  position: relative;
`;

export function FavoriteTagView() {

  console.log("FavoriteTagView render");

  return (
    <RelativeDiv>
      {/* タグアクションアイコン */}
      <FavoriteTagViewActions />
      {/* タグリスト */}
      <FavoriteTagList />
      {/* ガイド */}
      <FavoriteTagGuide />
    </RelativeDiv>
  );
}