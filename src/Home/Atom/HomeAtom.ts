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