import ENV from "../../env.json";
import { LoginUserInfoType } from "../Type/LoginUserInfoType";

const protocol = import.meta.env.VITE_PROTOCOL ?? ``;
const domain = import.meta.env.VITE_DOMAIN ?? ``;
const port = import.meta.env.VITE_PORT ?? ``;

// videomng-apiのパス
export const VIDEO_MNG_PATH = `${protocol}${domain}${port}`;
//z-index設定用
export const Z_INDEX_PARAM = {
    WAITL_OADING: 1000,
    HEAD_OVERLAY: 2000,
    HEAD_NAV: 2001,
    MODAL: 2002,
    MODAL_OVERLAY: 2000,
    CONFIRM_MODAL_OVERLAY: 2001,
}

// 月
export const MONTH_LIST = [
    { label: `1`, value: `01` },
    { label: `2`, value: `02` },
    { label: `3`, value: `03` },
    { label: `4`, value: `04` },
    { label: `5`, value: `05` },
    { label: `6`, value: `06` },
    { label: `7`, value: `07` },
    { label: `8`, value: `08` },
    { label: `9`, value: `09` },
    { label: `10`, value: `10` },
    { label: `11`, value: `11` },
    { label: `12`, value: `12` },
];

// 日
export const DAY_LIST = [
    { label: `1`, value: `01` },
    { label: `2`, value: `02` },
    { label: `3`, value: `03` },
    { label: `4`, value: `04` },
    { label: `5`, value: `05` },
    { label: `6`, value: `06` },
    { label: `7`, value: `07` },
    { label: `8`, value: `08` },
    { label: `9`, value: `09` },
    { label: `10`, value: `10` },
    { label: `11`, value: `11` },
    { label: `12`, value: `12` },
    { label: `13`, value: `13` },
    { label: `14`, value: `14` },
    { label: `15`, value: `15` },
    { label: `16`, value: `16` },
    { label: `17`, value: `17` },
    { label: `18`, value: `18` },
    { label: `19`, value: `19` },
    { label: `20`, value: `20` },
    { label: `21`, value: `21` },
    { label: `22`, value: `22` },
    { label: `23`, value: `23` },
    { label: `24`, value: `24` },
    { label: `25`, value: `25` },
    { label: `26`, value: `26` },
    { label: `27`, value: `27` },
    { label: `28`, value: `28` },
    { label: `29`, value: `29` },
    { label: `30`, value: `30` },
    { label: `31`, value: `31` },
];

// ログインユーザー情報初期値
export const LOGIN_USER_INFO_INIT: LoginUserInfoType = {
    userName: ``,
    birthday: ``,
}

// トースト表示時間
export const TOAST_DISPLAY_TIME = 3000;

// フラグ
export const FLG = {
    OFF: `0`,
    ON: `1`,
}