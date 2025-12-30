import React from "react";

// アクセストークン
export let accessTokenRef: string | null = null;
// ログインリセット
let resetLoginRef: resetLoginType | null = null;

type resetLoginType = {
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>,
    moveLogin(): void,
}

/**
 * アクセストークンを更新
 * @param token 
 */
export const updateAccessToken = (token: string) => {
    accessTokenRef = token;
};

/**
 * アクセストークンをリセット
 */
export const resetAccessToken = () => {
    accessTokenRef = null;
}

/**
 * ログインリセット処理を登録
 * @param setter 
 */
export const registerResetLogin = (props: resetLoginType) => {
    resetLoginRef = props;
};

/**
 * ログインリセット
 */
export const resetLogin = () => {
    resetLoginRef?.setIsLogin(false);
    resetLoginRef?.moveLogin();
}