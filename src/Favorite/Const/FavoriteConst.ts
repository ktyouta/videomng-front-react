import { comboType } from "../../Common/Component/ComboComponent";
import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";


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
export const VIDEO_DETIAL_MENU_LIST: comboType[] = [
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
    QUERY_KEY_VIEW_STATUS: `viewstatus`,
    // クエリパラメータのキー(カテゴリ)
    QUERY_KEY_CATEGORY: `videocategory`,
    // クエリパラメータのキー(タグ)
    QUERY_KEY_TAG: `videotag`,
    // クエリパラメータのキー(ソート)
    QUERY_KEY_SORT: `sortkey`,
    // クエリパラメータのキー(お気に入り度)
    QUERY_KEY_FAVORITE_LEVEL: `favoritelevel`,
} as const;