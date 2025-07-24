import { VIDEO_TYPE_LIST } from "../Const/HomeConst";
import { HomeVideoCommentThreadItemType } from "../Type/HomeVideoCommentThreadItemType";
import { SearchKeywordCommentType } from "../Type/SearchKeywordCommentType";
import { ShowMoreDataType } from "../Type/ShowMoreDataType";
import { VideoDetailItemType } from "../Type/VideoDetailItemType";
import { VideoListDataType } from "../Type/VideoListDataType";
import { YouTubeDataApiVideoDetailItemType } from "../Type/YouTubeDataApiVideoDetailItemType";
import { YouTubeDataApiVideoListItemType } from "../Type/YouTubeDataApiVideoListItemType";
import { atom } from "jotai";

// APIから取得した動画リスト
export const videoListDataAtom = atom<VideoListDataType | undefined>();
// 検索キーワード
export const keywordAtom = atom<string>(``);
// APIから取得した動画詳細
export const videoDetailItemAtom = atom<VideoDetailItemType>();
// 動画リスト追加読み込み用
export const showMoreDataAtom = atom<ShowMoreDataType>();
// コメント情報
export const homeVideoCommentListAtom = atom<HomeVideoCommentThreadItemType[]>();
// 動画一覧検索条件選択値(種別)
export const selectedVideoTypeAtom = atom<string>(VIDEO_TYPE_LIST[0].value);
// 動画一覧検索条件選択値(カテゴリ)
export const selectedVideoCategoryAtom = atom<string>(``);
// キーワード検索(コメント)情報
export const homeSearchKeywordCommentAtom = atom<SearchKeywordCommentType[]>();
// キーワード検索(コメント)用URL
export const homeSearchKeywordCommentUrlAtom = atom<string>(``);
// キーワード検索(コメント)キーワード
export const homeSearchKeywordCommentKeywordAtom = atom<string>(``);