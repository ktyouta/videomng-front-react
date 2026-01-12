import { FavoriteTagEditActions } from "./FavoriteTagEditActions";
import { FavoriteTagEditAssignedList } from "./FavoriteTagEditAssignedList";
import { FavoriteTagEditExistingList } from "./FavoriteTagEditExistingList";
import { FavoriteVideoTagEditListProvider } from "./FavoriteVideoTagEditListProvider";


export function FavoriteTagEdit() {

  console.log("FavoriteTagEdit render");

  return (
    <FavoriteVideoTagEditListProvider>
      {/* タグアクションアイコン */}
      <FavoriteTagEditActions />
      {/* 設定されているタグ */}
      <FavoriteTagEditAssignedList />
      {/* 既存タグから設定 */}
      <FavoriteTagEditExistingList />
    </FavoriteVideoTagEditListProvider>
  );
}