import { VIDEO_TYPE_LIST } from "../Const/HomeConst";
import { ShowMoreDataType } from "../Type/ShowMoreDataType";
import { VideoListDataType } from "../Type/VideoListDataType";
import { YouTubeDataApiVideoDetailItemType } from "../Type/YouTubeDataApiVideoDetailItemType";
import { YouTubeDataApiVideoListItemType } from "../Type/YouTubeDataApiVideoListItemType";
import { atom } from "jotai";

// APIから取得した動画リスト
export const videoListDataAtom = atom<VideoListDataType | undefined>();
// 検索キーワード
export const keywordAtom = atom<string>(``);
// 動画取得用URL
export const videoApiUrlAtom = atom<string>(``);
// 動画ID
export const videoIdAtom = atom<string>(``);
// APIから取得した動画詳細
export const videoDetailItemAtom = atom<YouTubeDataApiVideoDetailItemType>();
// 動画種別選択値
export const videoTypeSelectValueAtom = atom<string>(VIDEO_TYPE_LIST[0].value);
// 動画リスト追加読み込み用
export const showMoreDataAtom = atom<ShowMoreDataType>();