import React, { RefObject, useContext, useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import ENV from '../../env.json';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { refType } from '../../Common/Component/BaseTextbox';
import useMutationWrapper from '../../Common/Hook/useMutationWrapper';
import { errResType, resType } from '../../Common/Hook/useMutationWrapperBase';
import { LoginRequestType } from '../Type/LoginRequestType';
import { useSetAtom } from 'jotai';
import { LoginResponseType } from '../Type/LoginResponseType';
import { useSetGlobalAtom } from '../../Common/Hook/useGlobalAtom';
import { SetIsLoginContext, SetLoginUserInfoContext } from '../../QueryApp';
import { LoginUserInfoType } from '../../Common/Type/LoginUserInfoType';
import { ROUTER_PATH } from '../../Common/Const/RouterPath';
import { VIDEO_MNG_PATH } from '../../Common/Const/CommonConst';


export function useLogin() {

    // ユーザー名参照用
    const userNameRef: RefObject<refType> = useRef(null);
    // パスワード参照用
    const userPasswordRef: RefObject<refType> = useRef(null);
    // ルーティング用
    const navigate = useNavigate();
    // ログインフラグ
    const setIsLogin = SetIsLoginContext.useCtx();
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // ログインユーザー情報(setter)
    const setLoginUserInfo = SetLoginUserInfoContext.useCtx();
    // 遷移元
    const [previousPath, setPreviousPath] = useState(``);


    useEffect(() => {

        const query = window.location.search;

        if (query && query.length > 0 && query.charAt(0) === `?`) {

            const params = new URLSearchParams(query);
            const previousPathValue = params.get(`previouspath`);

            if (previousPathValue) {

                setPreviousPath(previousPathValue);
            }
        }

    }, []);

    /**
     * ログインリクエスト
     */
    const postMutation = useMutationWrapper({
        url: `${VIDEO_MNG_PATH}${ENV.FRONT_USER_LOGIN}`,
        method: "POST",
        // 正常終了後の処理
        afSuccessFn: (res: resType<LoginUserInfoType>) => {

            const loginUserInfo: LoginUserInfoType = res.data;

            setLoginUserInfo(loginUserInfo);
            setIsLogin(true);
            navigate(previousPath);
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {

            //エラーメッセージを表示
            setErrMessage(`ログインに失敗しました。`);
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
        if (!userNameRef.current?.refValue) {
            setErrMessage(`ユーザー名が未入力です。`);
            return;
        }

        // パスワード未入力
        if (!userPasswordRef.current?.refValue) {
            setErrMessage(`パスワードが未入力です。`);
            return;
        }

        const userName = userNameRef.current?.refValue as string;
        const password = userPasswordRef.current?.refValue as string;
        const body: LoginRequestType = {
            userName,
            password
        };

        //認証API呼び出し
        postMutation.mutate(body);
    }

    /**
     * 入力値のクリア
     */
    function clickClearBtn() {
        userNameRef.current?.clearValue();
        userPasswordRef.current?.clearValue();
    }

    /**
     * 会員登録画面遷移
     */
    function clickSignup() {

        let query = ``;

        if (previousPath) {
            query = `?previouspath=${previousPath}`;
        }

        navigate(`${ROUTER_PATH.SIGNUP}${query}`);
    }

    /**
     * 戻るボタン
     */
    function clickBack() {

        let backPagePath = ROUTER_PATH.HOME.ROOT;

        if (previousPath) {
            backPagePath = previousPath;
        }

        navigate(backPagePath);
    }

    return {
        userNameRef,
        userPasswordRef,
        clickLoginBtn,
        clickClearBtn,
        handleKeyPress,
        errMessage,
        clickSignup,
        clickBack,
        isLoading: postMutation.isLoading,
    }
}