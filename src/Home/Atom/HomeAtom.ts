import { VIDEO_TYPE_LIST } from "../Const/HomeConst";
import { HomeVideoCommentThreadItemType } from "../Type/VideoDetail/VideoComment/HomeVideoCommentThreadItemType";
import { SearchKeywordCommentType } from "../Type/VideoDetail/VideoSearchKeywordComment/SearchKeywordCommentType";
import { ShowMoreDataType } from "../Type/VideoList/ShowMoreDataType";
import { VideoDetailItemType } from "../Type/VideoDetail/VideoDetailItemType";
import { VideoListDataType } from "../Type/VideoList/VideoListDataType";
import { YouTubeDataApiVideoDetailItemType } from "../Type/VideoDetail/YouTubeDataApiVideoDetailItemType";
import { YouTubeDataApiVideoListItemType } from "../Type/VideoList/YouTubeDataApiVideoListItemType";
import { atom } from "jotai";

// APIから取得した動画リスト
export const videoListDataAtom = atom<VideoListDataType | undefined>();
// 検索キーワード
export const keywordAtom = atom<string>(``);
// 動画リスト追加読み込み用
export const showMoreDataAtom = atom<ShowMoreDataType>();
// 動画一覧検索条件選択値(種別)
export const selectedVideoTypeAtom = atom<string>(VIDEO_TYPE_LIST[0].value);
// 動画一覧検索条件選択値(カテゴリ)
export const selectedVideoCategoryAtom = atom<string>(``);