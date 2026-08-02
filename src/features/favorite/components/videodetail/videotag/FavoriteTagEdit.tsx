import styled from "styled-components";
import { FavoriteTagEditActions } from "./FavoriteTagEditActions";
import { FavoriteTagEditAssignedList } from "./FavoriteTagEditAssignedList";
import { FavoriteTagEditExistingList } from "./FavoriteTagEditExistingList";
import { FavoriteVideoTagEditListProvider } from "./FavoriteVideoTagEditListProvider";


const RelativeDiv = styled.div`
  position: relative;
`;

export function FavoriteTagEdit() {

  console.log("FavoriteTagEdit render");

  return (
    <FavoriteVideoTagEditListProvider>
      <RelativeDiv>
        {/* タグアクションアイコン */}
        <FavoriteTagEditActions />
        {/* 設定されているタグ */}
        <FavoriteTagEditAssignedList />
        {/* 既存タグから設定 */}
        <FavoriteTagEditExistingList />
      </RelativeDiv>
    </FavoriteVideoTagEditListProvider>
  );
}