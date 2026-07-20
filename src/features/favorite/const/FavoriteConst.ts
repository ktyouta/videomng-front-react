import { Option } from "../../../components/Selectbox";


// メニュー番号
export enum MENU_NO {
    INFO = `1`,
    MEMO = `2`,
    KEYWORD_SEARCH_COMMENT = `3`,
    COMMENT = `4`,
    VIDEO_DETAIL_SETTING = `5`,
    TAG = `6`,
}

// お気に入り動画詳細画面メニューリスト
export const VIDEO_DETIAL_MENU_LIST: Option[] = [
    {
        label: `動画情報`,
        value: `1`,
    },
    {
        label: `公開コメント`,
        value: `4`,
    },
    {
        label: `キーワード検索(コメント)`,
        value: `3`,
    },

    {
        label: `動画詳細設定`,
        value: `5`,
    },
    {
        label: `メモ`,
        value: `2`,
    },
    {
        label: `タグ`,
        value: `6`,
    }
];

// お気に入り動画詳細画面メニューリスト(未登録)
export const NON_FAVORITE_VIDEO_DETAIL_MENU_LIST: Option[] = [
    {
        label: `動画情報`,
        value: `1`,
    },
    {
        label: `公開コメント`,
        value: `4`,
    },
    {
        label: `キーワード検索(コメント)`,
        value: `3`,
    },
];

// コメントお気に入りステータス
export const COMMENT_FAVORITE_STATUS = {
    NONE: "0",
    FAVORITE: "1",
}

// 動画詳細画面編集モード
export enum EDIT_MODE {
    VIEW = `1`,
    EDIT = `2`,
}

// タグ画面編集モード
export enum TAG_EDIT_MODE {
    VIEW = `1`,
    EDIT = `2`,
}

// お気に入り度設定値
export const FAVORITE_LEVEL_SETTING_LIST = 5;

// 動画一覧の検索条件
export const SEARCH_CONDITION = {
    // クエリパラメータのキー(視聴状況)
    QUERY_KEY_VIEW_STATUS: `viewStatus`,
    // クエリパラメータのキー(カテゴリ)
    QUERY_KEY_CATEGORY: `videoCategory`,
    // クエリパラメータのキー(タグ)
    QUERY_KEY_TAG: `videoTag`,
    // クエリパラメータのキー(ソート)
    QUERY_KEY_SORT: `sortKey`,
    // クエリパラメータのキー(お気に入り度)
    QUERY_KEY_FAVORITE_LEVEL: `favoriteLevel`,
    // クエリパラメータのキー(ページ)
    QUERY_KEY_PAGE: `page`,
    // クエリパラメータのキー(フォルダ)
    QUERY_KEY_FOLDER: `folder`,
    // クエリパラメータのキー(モード)
    QUERY_KEY_MODE: `mode`,
} as const;

// フォルダ内動画一覧の検索条件
export const FOLDER_SEARCH_CONDITION = {
    // クエリパラメータのキー(視聴状況)
    QUERY_KEY_VIEW_STATUS: `viewStatus`,
    // クエリパラメータのキー(カテゴリ)
    QUERY_KEY_CATEGORY: `videoCategory`,
    // クエリパラメータのキー(タグ)
    QUERY_KEY_TAG: `videoTag`,
    // クエリパラメータのキー(お気に入り度)
    QUERY_KEY_FAVORITE_LEVEL: `favoriteLevel`,
    // クエリパラメータのキー(ソート)
    QUERY_KEY_SORT: `sortKey`,
    // クエリパラメータのキー(ページ)
    QUERY_KEY_PAGE: `page`,
    // クエリパラメータのキー(フォルダ)
    QUERY_KEY_FOLDER: `folder`,
    // クエリパラメータのキー(モード)
    QUERY_KEY_MODE: `mode`,
} as const;

// クエリパラメータ(キーワード検索)
export const QUERY_KEY_SEARCH_COMMENT = `q`;

// フォルダ内の動画を削除するフラグ
export const DELETEFAVORITEVIDEOINFOLDER = {
    ON: `1`,
    OFF: `0`
} as const;

// フォルダ内動画一覧画面表示フラグ
export const ISVISIBLEAFTERFOLDERADD = {
    ON: `1`,
    OFF: `0`
} as const;

// フォルダ内動画一覧画面表示選択リスト
export const ISVISIBLEAFTERFOLDERADDLIST = [
    {
        label: `表示しない`,
        value: ISVISIBLEAFTERFOLDERADD.OFF,
    },
    {
        label: `表示する`,
        value: ISVISIBLEAFTERFOLDERADD.ON,
    }
]

// フォルダ内動画一覧画面表示選択リスト(フィルター)
export const ISSHOWFOLDERFILTERLIST = [
    {
        label: `表示する`,
        value: ISVISIBLEAFTERFOLDERADD.ON,
    },
    {
        label: `表示しない`,
        value: ISVISIBLEAFTERFOLDERADD.OFF,
    }
]

// デフォルトのフォルダカラー
export const DEFAULT_FOLDER_COLOR = "#00A8FF";

// デフォルトのタグカラー
export const DEFAULT_TAG_COLOR = "linear-gradient(135deg, #3b82f6, #2563eb)";

export const FAVORITE_SEARCH_AREA_SECTION_GAP = "24px";

// ヘッダーのユーザーメニュー（HeaderUserMenuList）と同じ「浮いているパネル」の配色に揃える
export const FAVORITE_SEARCH_AREA_PANEL_BG = "#1c1f26";

export const FAVORITE_SEARCH_AREA_PANEL_BORDER = "#3a3f4b";

export const FAVORITE_SEARCH_AREA_PANEL_SHADOW = "0 4px 12px rgba(0, 0, 0, 0.6)";

// キャンセル/実行ボタン（FavoriteCreateFolder等）と同じ色に揃える
export const FAVORITE_SEARCH_AREA_BUTTON_BG = "#3a3d42";

export const FAVORITE_SEARCH_AREA_BUTTON_HOVER_BG = "rgba(37, 99, 235, 0.18)";

export const FAVORITE_SEARCH_AREA_LABEL_COLOR = "#9e9e9e";

export const FAVORITE_SEARCH_AREA_ACCENT_COLOR = "#7abaff";

// 一覧画面表示モード
export const FAVORITE_LIST_MODE = {
    folder: {
        label: `フォルダを表示`,
        value: `1`
    },
    videoOnly: {
        label: `動画のみ表示`,
        value: `2`,
    }
}