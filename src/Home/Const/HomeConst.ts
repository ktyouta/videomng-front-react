import { comboType } from "../../Common/Component/ComboComponent";
import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";

// ホーム画面ルートパス
export const HOME_ROOT_PATH = "/";

// 動画種別リスト
export const VIDEO_TYPE_LIST: comboType[] = [
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
}

// 動画詳細画面メニューリスト
export const VIDEO_DETIAL_MENU_LIST: comboType[] = [
    {
        label: `動画情報`,
        value: `1`,
    },
    {
        label: `公開コメント`,
        value: `2`,
    }
];