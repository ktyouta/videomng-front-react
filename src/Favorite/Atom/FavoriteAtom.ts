import { comboType } from "../../Common/Component/ComboComponent";
import { tagType } from "../../Common/Component/TagsComponent";
import { VideoListResponseType } from "../../Home/Type/VideoList/VideoListResponseType";
import { FavoriteVideoDetailDataType } from "../Type/VideoDetail/FavoriteVideoDetailDataType";
import { FavoriteVideoListMergedType } from "../Type/VideoList/FavoriteVideoListMergedType";
import { FavoriteVideoMemoType } from "../Type/VideoDetail/VideoMemo/FavoriteVideoMemoType";
import { FavoriteVideoTagType } from "../Type/VideoDetail/VideoTag/FavoriteVideoTagType";
import { SearchKeywordCommentType } from "../Type/VideoDetail/VideoSearchKeywordComment/SearchKeywordCommentType";
import { ViewStatusType } from "../Type/VideoList/ViewStatusType";
import { YouTubeDataApiCommentDetailResponseType } from "../Type/VideoDetail/VideoComment/YouTubeDataApiCommentDetailResponseType";
import { YouTubeDataApiVideoDetailItemType } from "../Type/VideoDetail/YouTubeDataApiVideoDetailItemType";
import { atom } from "jotai";
import { FavoriteVideoCommentThreadItemType } from "../Type/VideoDetail/VideoComment/FavoriteVideoCommentThreadItemType";

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
// キーワード検索(コメント)キーワード
export const searchKeywordCommentKeywordAtom = atom<string>(``);
// ブロックコメントリスト
export const blockCommentDataAtom = atom<YouTubeDataApiCommentDetailResponseType>();
// お気に入りコメントリスト
export const favoriteCommentDataAtom = atom<YouTubeDataApiCommentDetailResponseType>();
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
// 動画一覧ソートキー
export const selectedFavoriteVideoSortKeyAtom = atom<string>(``);
// 動画一覧検索条件選択値(お気に入り度)
export const selectedFavoriteVideoFavoriteLevelAtom = atom<string>(``);