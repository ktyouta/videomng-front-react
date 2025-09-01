import { atom } from "jotai";

// 動画一覧検索条件選択値(カテゴリ)
export const selectedFavoriteVideoCategoryAtom = atom<string>(``);
// 動画一覧検索条件選択値(視聴状況)
export const selectedFavoriteVideoviewStatusAtom = atom<string>(``);
// 動画取得用URL
export const favoriteVideoApiUrlAtom = atom<string>(``);
// 動画一覧検索条件選択値(タグ)
export const selectedFavoriteVideoTagAtom = atom<string>(``);
// 動画一覧ソートキー
export const selectedFavoriteVideoSortKeyAtom = atom<string>(``);
// 動画一覧検索条件選択値(お気に入り度)
export const selectedFavoriteVideoFavoriteLevelAtom = atom<string>(``);