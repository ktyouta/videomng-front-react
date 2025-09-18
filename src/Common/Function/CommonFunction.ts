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