import styled from "styled-components";
import { FavoriteTagEditAssignedList } from "./FavoriteTagEditAssignedList";
import { FavoriteTagEditExistingList } from "./FavoriteTagEditExistingList";

const Parent = styled.div`
  width: 100%;
  flex: 1;
  box-sizing: border-box;
  padding-left: 2%;
  padding-top: 4%;
  padding-right: 2%;
  color:white;
`;

export function FavoriteTagEditList() {

    console.log("FavoriteTagEditList render");

    return (
        <Parent>
            {/* 既存タグから設定 */}
            <FavoriteTagEditExistingList />
            {/* 設定されているタグ */}
            <FavoriteTagEditAssignedList />
        </Parent>
    );
}