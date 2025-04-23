import { comboType } from "../../Common/Component/ComboComponent";
import { tagType } from "../../Common/Component/TagsComponent";
import { VideoListResponseType } from "../../Home/Type/VideoListResponseType";
import { FavoriteVideoCommentThreadItemType } from "../Type/FavoriteVideoCommentThreadItemType";
import { FavoriteVideoDetailDataType } from "../Type/FavoriteVideoDetailDataType";
import { FavoriteVideoListMergedType } from "../Type/FavoriteVideoListMergedType";
import { FavoriteVideoMemoType } from "../Type/FavoriteVideoMemoType";
import { FavoriteVideoTagType } from "../Type/FavoriteVideoTagType";
import { SearchKeywordCommentType } from "../Type/SearchKeywordCommentType";
import { ViewStatusType } from "../Type/ViewStatusType";
import { YouTubeDataApiCommentDetailResponseType } from "../Type/YouTubeDataApiCommentDetailResponseType";
import { YouTubeDataApiVideoDetailItemType } from "../Type/YouTubeDataApiVideoDetailItemType";
import { atom } from "jotai";

// APIから取得した動画リスト
export const favoriteVideoListAtom = atom<FavoriteVideoListMergedType[] | undefined>();
// APIから取得した動画詳細
export const favoriteVideoDetailItemAtom = atom<FavoriteVideoDetailDataType>();
// メモ情報
export const favoriteVideoMemoListAtom = atom<FavoriteVideoMemoType[]>();
// コメント情報
export const favoriteVideoCommentListAtom = atom<FavoriteVideoCommentThreadItemType[]>();
// キーワード検索(コメント)情報
export const searchKeywordCommentAtom = atom<SearchKeywordCommentType[]>();
// キーワード検索(コメント)用URL
export const searchKeywordCommentUrlAtom = atom<string>(``);
// ブロックコメントリスト
export const blockCommentDataAtom = atom<YouTubeDataApiCommentDetailResponseType>();
// お気に入りコメントリスト
export const favoriteCommentDataAtom = atom<YouTubeDataApiCommentDetailResponseType>();
// 視聴状況リスト
export const viewStatusListAtom = atom<comboType[]>();
// 動画一覧検索条件選択値(カテゴリ)
export const selectedFavoriteVideoCategoryAtom = atom<string>(``);
// 動画一覧検索条件選択値(視聴状況)
export const selectedFavoriteVideoviewStatusAtom = atom<string>(``);
// 動画取得用URL
export const favoriteVideoApiUrlAtom = atom<string>(``);
// タグリスト
export const favoriteVideoTagListAtom = atom<FavoriteVideoTagType[]>();
// タグ編集リスト
export const favoriteVideoTagEditListAtom = atom<tagType[]>([]);
// 動画一覧検索条件選択値(タグ)
export const selectedFavoriteVideoTagAtom = atom<string>(``);