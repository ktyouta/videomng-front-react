import { ALLOWED_PATH } from "../consts/AllowedPath";

/**
 * オブジェクトのディープコピー
 * @param arg 
 * @returns 
 */
export function objectDeepCopy<T>(arg: T): T {
    return JSON.parse(JSON.stringify(arg));
}

/**
 * オブジェクトのキーチェック
 * @param obj 
 * @param key 
 * @returns 
 */
export function hasKey<T extends object,>(obj: T, key: keyof T): key is keyof T {

    return key in obj;
}

/**
 * 日付のフォーマット
 * @param strDate 
 * @returns 
 */
export function formatDateJP(strDate: string) {

    if (!strDate) {
        return ``;
    }

    const date = new Date(strDate);

    const publishedDate = new Intl.DateTimeFormat("ja-JP", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(date);

    return publishedDate;
}

/**
 * 前画面のパスを取得
 */
export function getPrevPath(key: string, defaultPath: string) {

    // クエリパラメータ(遷移元情報)
    const queryParam = location.search;

    const keyIndex = queryParam.indexOf(`${key}=`);

    if (keyIndex === -1) {
        return defaultPath;
    }

    const start = keyIndex + `${key}=`.length;
    const path = queryParam.slice(start) || defaultPath;

    if (path.startsWith('/') && !path.startsWith('//') && ALLOWED_PATH.some((e) => path.startsWith(e))) {
        return path;
    }

    return defaultPath;
};