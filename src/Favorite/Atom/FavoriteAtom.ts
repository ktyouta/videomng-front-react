import { VideoListResponseType } from "../../Home/Type/VideoListResponseType";
import { FavoriteVideoDetailDataType } from "../Type/FavoriteVideoDetailDataType";
import { FavoriteVideoListMergedType } from "../Type/FavoriteVideoListMergedType";
import { YouTubeDataApiVideoDetailItemType } from "../Type/YouTubeDataApiVideoDetailItemType";
import { atom } from "jotai";

// APIから取得した動画リスト
export const favoriteVideoListAtom = atom<FavoriteVideoListMergedType[] | undefined>();
// 動画ID
export const videoIdAtom = atom<string>(``);
// APIから取得した動画詳細
export const videoDetailItemAtom = atom<FavoriteVideoDetailDataType>();