import React, { RefObject, useContext, useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import ENV from '../../env.json';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { refType } from '../../Common/Component/BaseTextbox';
import useMutationWrapper from '../../Common/Hook/useMutationWrapper';
import { errResType, resType } from '../../Common/Hook/useMutationWrapperBase';
import { SetIsLoginContext, SetLoginUserInfoContext } from '../../QueryApp';
import { LoginUserInfoType } from '../../Common/Type/LoginUserInfoType';
import { ROUTER_PATH } from '../../Common/Const/RouterPath';
import { VIDEO_MNG_PATH } from '../../Common/Const/CommonConst';
import { useQueryParams } from '../../Common/Hook/useQueryParams';
import { useLoginForm } from './useLoginForm';
import { LoginFormType } from '../Type/LoginFormType';


export function useLogin() {

    // ルーティング用
    const navigate = useNavigate();
    // ログインフラグ
    const setIsLogin = SetIsLoginContext.useCtx();
    // ログインユーザー情報(setter)
    const setLoginUserInfo = SetLoginUserInfoContext.useCtx();
    // クエリパラメータ(遷移元)
    const { previouspath } = useQueryParams();
    // ログインフォーム
    const form = useLoginForm({
        onSubmit: submit
    });

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
            navigate(previouspath);
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {
            form.setFieldValue(`password`, ``);
        },
    });

    /**
     * エンターキー押下時イベント
     */
    function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            form.handleSubmit();
        }
    };

    /**
     * form送信
     */
    function submit(value: LoginFormType) {

        const body: LoginFormType = {
            userName: value.userName,
            password: value.password,
        };

        postMutation.mutate(body);
    }

    /**
     * 会員登録画面遷移
     */
    function clickSignup() {

        let query = ``;

        if (previouspath) {
            query = `?previouspath=${previouspath}`;
        }

        navigate(`${ROUTER_PATH.SIGNUP}${query}`);
    }

    /**
     * 戻るボタン
     */
    function clickBack() {

        let backPagePath = ROUTER_PATH.HOME.ROOT;

        if (previouspath) {
            backPagePath = previouspath;
        }

        navigate(backPagePath);
    }

    return {
        handleKeyPress,
        clickSignup,
        clickBack,
        isLoading: postMutation.isLoading,
        form,
        isError: postMutation.isError,
    }
}