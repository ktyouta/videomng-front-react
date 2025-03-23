import { comboType } from "../../Common/Component/ComboComponent";
import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";

// お気に入り画面ルートパス
export const FAVORITE_ROOT_PATH = "/favorite";

// メニュー番号
export enum MENU_NO {
    INFO = `1`,
    MEMO = `2`,
    KEYWORD_SEARCH_COMMENT = `3`,
    COMMENT = `4`,
}

// お気に入り動画詳細画面メニューリスト
export const VIDEO_DETIAL_MENU_LIST: comboType[] = [
    {
        label: `動画情報`,
        value: `1`,
    },
    {
        label: `メモ`,
        value: `2`,
    },
    {
        label: `キーワード検索(コメント)`,
        value: `3`,
    },
    {
        label: `公開コメント`,
        value: `4`,
    }
];