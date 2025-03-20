import { VideoListResponseType } from "../../Home/Type/VideoListResponseType";
import { FavoriteVideoCommentThreadItemType } from "../Type/FavoriteVideoCommentThreadItemType";
import { FavoriteVideoDetailDataType } from "../Type/FavoriteVideoDetailDataType";
import { FavoriteVideoListMergedType } from "../Type/FavoriteVideoListMergedType";
import { FavoriteVideoMemoType } from "../Type/FavoriteVideoMemoType";
import { YouTubeDataApiVideoDetailItemType } from "../Type/YouTubeDataApiVideoDetailItemType";
import { atom } from "jotai";

// APIから取得した動画リスト
export const favoriteVideoListAtom = atom<FavoriteVideoListMergedType[] | undefined>();
// 動画ID
export const favoriteVideoIdAtom = atom<string>(``);
// APIから取得した動画詳細
export const favoriteVideoDetailItemAtom = atom<FavoriteVideoDetailDataType>();
// メモ情報
export const favoriteVideoMemoListAtom = atom<FavoriteVideoMemoType[]>();
// コメント情報
export const favoriteVideoCommentListAtom = atom<FavoriteVideoCommentThreadItemType[]>();