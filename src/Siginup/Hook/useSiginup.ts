import React, { RefObject, useContext, useMemo, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import ENV from '../../env.json';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { refType } from '../../Common/Component/BaseTextbox';
import useMutationWrapper from '../../Common/Hook/useMutationWrapper';
import { errResType, resType } from '../../Common/Hook/useMutationWrapperBase';
import { useSetAtom } from 'jotai';
import { useSetGlobalAtom } from '../../Common/Hook/useGlobalAtom';
import { SetIsLoginContext, SetLoginUserInfoContext } from '../../QueryApp';
import { SiginupRequestType } from '../Type/SiginupRequestType';
import { comboType } from '../../Common/Component/ComboComponent';
import { useCreateYearList } from '../../Common/Hook/useCreateYearList';
import { LoginUserInfoType } from '../../Common/Type/LoginUserInfoType';
import { ROUTER_PATH } from '../../Common/Const/RouterPath';


export function useSiginup() {

    // ユーザー名参照用
    const userNameRef: RefObject<refType> = useRef(null);
    // パスワード参照用
    const userPasswordRef: RefObject<refType> = useRef(null);
    // 生年月日(年)参照用
    const userBirthdayYearRef: RefObject<refType> = useRef(null);
    // 生年月日(月)参照用
    const userBirthdayMonthRef: RefObject<refType> = useRef(null);
    // 生年月日(日)参照用
    const userBirthdayDayRef: RefObject<refType> = useRef(null);
    // ルーティング用
    const navigate = useNavigate();
    // ログインフラグ
    const setIsLogin = SetIsLoginContext.useCtx();
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // ログインユーザー情報(setter)
    const setLoginUserInfo = SetLoginUserInfoContext.useCtx();
    // 年リスト
    const yearCoomboList = useCreateYearList();

    /**
     * 登録リクエスト
     */
    const postMutation = useMutationWrapper({
        url: `${ENV.PROTOCOL}${ENV.DOMAIN}${ENV.PORT}${ENV.FRONT_USER_INFO}`,
        method: "POST",
        // 正常終了後の処理
        afSuccessFn: (res: resType<LoginUserInfoType>) => {

            const loginUserInfo = res.data;

            setLoginUserInfo(loginUserInfo);
            setIsLogin(true);
            navigate(ROUTER_PATH.HOME);
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {

            const errMessage = res.response.data.message;

            //エラーメッセージを表示
            setErrMessage(`${errMessage}`);
            userPasswordRef.current?.clearValue();
        },
    });

    /**
     * エンターキー押下時イベント
     */
    function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            clickSiginupBtn();
        }
    };

    /**
     * ログインボタン押下
     */
    function clickSiginupBtn() {

        const userName = userNameRef.current?.refValue as string;
        const password = userPasswordRef.current?.refValue as string;
        const userBirthday = `${userBirthdayYearRef.current?.refValue}${userBirthdayMonthRef.current?.refValue}${userBirthdayDayRef.current?.refValue}`;

        // ユーザーID未入力
        if (!userName) {
            setErrMessage(`ユーザー名が未入力です。`);
            return;
        }

        // パスワード未入力
        if (!password) {
            setErrMessage(`パスワードが未入力です。`);
            return;
        }

        // 生年月日未選択
        if (!userBirthday) {
            setErrMessage(`生年月日が未選択です。`);
            return;
        }

        const body: SiginupRequestType = {
            userName,
            password,
            userBirthday,
        };

        // 登録リクエスト呼び出し
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
     * 戻るボタン押下
     */
    function clickBack() {
        navigate(ROUTER_PATH.LOGIN);
    }

    return {
        userNameRef,
        userPasswordRef,
        clickSiginupBtn,
        clickClearBtn,
        handleKeyPress,
        errMessage,
        userBirthdayYearRef,
        userBirthdayMonthRef,
        userBirthdayDayRef,
        yearCoomboList,
        clickBack,
    }
}