import ENV from "../../env.json";

// videomng-apiのパス
export const VIDEO_MNG_PATH = `${ENV.PROTOCOL}${ENV.DOMAIN}${ENV.PORT}`;
//z-index設定用
export const Z_INDEX_PARAM = {
    WAITLOADING: 1000,
    HEADOVERLAY: 2000,
    HEADNAV: 2001,
}