import { VIDEO_TYPE_LIST } from "../Const/HomeConst";
import { YouTubeDataApiVideoDetailItemType } from "../Type/YouTubeDataApiVideoDetailItemType";
import { YouTubeDataApiVideoListItemType } from "../Type/YouTubeDataApiVideoListItemType";
import { atom } from "jotai";

// APIから取得した動画リスト
export const videoListItemAtom = atom<YouTubeDataApiVideoListItemType[] | undefined>();
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