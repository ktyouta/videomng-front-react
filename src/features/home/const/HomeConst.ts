import { Option } from "../../../components/Selectbox";

// 動画種別リスト
export const VIDEO_TYPE_LIST: Option[] = [
    {
        label: `すべて`,
        value: `all`,
    },
    {
        label: `ライブ`,
        value: `live`,
    }
];

// メニュー番号
export enum MENU_NO {
    INFO = `1`,
    COMMENT = `2`,
    KEYWORD_SEARCH_COMMENT = `3`,
}

// 動画詳細画面メニューリスト
export const VIDEO_DETIAL_MENU_LIST: Option[] = [
    {
        label: `動画情報`,
        value: `1`,
    },
    {
        label: `公開コメント`,
        value: `2`,
    },
    {
        label: `キーワード検索(コメント)`,
        value: `3`,
    }
];

// ローカルストレージKey(最近の検索)
export const REACENT_KEYWORD = `recentKeyword`;

// ローカルストレージ最大表示数/最大保存数(最近の検索)
export const REACENT_KEYWORD_MAX = 5;

// ローカルストレージKey(あなたがよく検索するワード)
export const FREQUENT_KEYWORD = `frequentKeyword`;

// ローカルストレージ最大表示数(あなたがよく検索するワード)
export const FREQUENT_KEYWORD_MAX = 5;

// ローカルストレージ最大保存数(あなたがよく検索するワード)
export const FREQUENT_KEYWORD_MAX_SAVE_LIMIT = 5;

// ローカルストレージKey(お気に入りワード)
export const FAVORITE_KEYWORD = `favoriteKeyword`;

// ローカルストレージ最大表示数/最大保存数(お気に入りワード)
export const FAVORITE_KEYWORD_MAX = 5;

// 動画一覧の検索条件
export const SEARCH_CONDITION = {
    // クエリパラメータのキー(検索キーワード)
    QUERY_KEY_KEYWORD: `q`,
    // クエリパラメータのキー(カテゴリ)
    QUERY_KEY_CATEGORY: `videoCategory`,
    // クエリパラメータのキー(種別)
    QUERY_KEY_TYPE: `videoType`,
    // クエリパラメータのキー(次データ取得用トークン)
    QUERY_KEY_NEXT_PAGE_TOKEN: `nextPageToken`
} as const;

// 検索条件一式をURLクエリで保持するためのキー
export const LIST_SEARCH_CONDITION_KEY = `criteria`;
