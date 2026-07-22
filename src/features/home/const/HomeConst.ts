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

// クエリパラメータ(キーワード検索)
export const QUERY_KEY_SEARCH_COMMENT = `q`;

// 検索条件一式をURLクエリで保持するためのキー
export const LIST_SEARCH_CONDITION_KEY = `criteria`;

// お気に入り動画一覧の検索エリアと同じ配色に揃える
export const HOME_SEARCH_AREA_PANEL_BG = "#1c1f26";

export const HOME_SEARCH_AREA_PANEL_BORDER = "#3a3f4b";

export const HOME_SEARCH_AREA_PANEL_SHADOW = "0 4px 12px rgba(0, 0, 0, 0.6)";

// お気に入り動画一覧の操作ボタンと同じ配色に揃える
export const HOME_SEARCH_AREA_BUTTON_BG = "#3a3d42";

export const HOME_SEARCH_AREA_BUTTON_HOVER_BG = "rgba(37, 99, 235, 0.18)";

export const HOME_SEARCH_AREA_ACCENT_COLOR = "#7abaff";

// お気に入り動画一覧のラベル文字色と同じ配色に揃える
export const HOME_SEARCH_AREA_LABEL_COLOR = "#9e9e9e";

// 検索前ワードエリアのセクション間隔
export const HOME_WORD_AREA_SECTION_GAP = "36px";

// 検索前ワードエリアの区切り線とその上のセクションとの間隔（区切り線を挟んで上下対称にするため、セクション間隔と揃えているが別概念として管理する）
export const HOME_WORD_AREA_DIVIDER_PADDING = "23px";
