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