import React, { RefObject, useContext, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import ENV from '../../env.json';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { refType } from '../../Common/Component/BaseTextbox';
import useMutationWrapper from '../../Common/Hook/useMutationWrapper';
import { errResType, resType } from '../../Common/Hook/useMutationWrapperBase';
import { LoginRequestType } from '../Type/LoginRequestType';
import { useSetAtom } from 'jotai';
import { isLoginAtom } from '../../Common/Atom/CommonAtom';
import { HOME_ROOT_PATH } from '../../Home/Const/HomeConst';


export function useLogin() {

    // ユーザーID参照用
    const userIdRef: RefObject<refType> = useRef(null);
    // パスワード参照用
    const userPasswordRef: RefObject<refType> = useRef(null);
    // 認証クッキー
    const [cookie, setCookie, removeCookie] = useCookies();
    // ルーティング用
    const navigate = useNavigate();
    // ログインフラグ
    const setIsLogin = useSetAtom(isLoginAtom);
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);

    /**
     * ログインリクエスト
     */
    const postMutation = useMutationWrapper({
        url: `${ENV.PROTOCOL}${ENV.DOMAIN}${ENV.PORT}${ENV.FRONT_USER_LOGIN}`,
        method: "POST",
        // 正常終了後の処理
        afSuccessFn: (res: resType) => {
            //トークンをクッキーにセット
            setCookie(ENV.AUTHENTICATION.cookie, res.token, { path: '/' });
            setIsLogin(true);
            navigate(HOME_ROOT_PATH);
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {
            // クッキーを削除
            Object.keys(cookie).forEach((key) => {
                removeCookie(key, { path: '/' });
            });
            //エラーメッセージを表示
            setErrMessage(res.response.data.message);
            userPasswordRef.current?.clearValue();
        },
    });

    /**
     * エンターキー押下時イベント
     */
    function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            clickLoginBtn();
        }
    };

    /**
     * ログインボタン押下
     */
    function clickLoginBtn() {

        // ユーザーID未入力
        if (!userIdRef.current?.refValue) {
            alert("ユーザーIDが未入力です。");
            return;
        }

        // パスワード未入力
        if (!userPasswordRef.current?.refValue) {
            alert("パスワードが未入力です。");
            return;
        }

        const userId = userIdRef.current?.refValue as string;
        const password = userPasswordRef.current?.refValue as string;
        const body: LoginRequestType = { userId, password }

        //認証API呼び出し
        postMutation.mutate(body);
    }

    /**
     * 入力値のクリア
     */
    function clickClearBtn() {
        userIdRef.current?.clearValue();
        userPasswordRef.current?.clearValue();
    }

    return {
        userIdRef,
        userPasswordRef,
        clickLoginBtn,
        clickClearBtn,
        handleKeyPress,
        errMessage,
    }
}