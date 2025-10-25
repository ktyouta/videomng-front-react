import React, { RefObject, useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import ENV from '../../env.json';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { refType } from '../../Common/Component/BaseTextbox';
import useMutationWrapper from '../../Common/Hook/useMutationWrapper';
import { errResType, resSchema, resType } from '../../Common/Hook/useMutationWrapperBase';
import { SetIsLoginContext, SetLoginUserInfoContext } from '../../QueryApp';
import { LoginUserInfoType } from '../../Common/Type/LoginUserInfoType';
import { ROUTER_PATH } from '../../Common/Const/RouterPath';
import { PREV_PATH_KEY, VIDEO_MNG_PATH } from '../../Common/Const/CommonConst';
import { useQueryParams } from '../../Common/Hook/useQueryParams';
import { useLoginForm } from './useLoginForm';
import { LoginFormType } from '../Type/LoginFormType';
import { loginUserInfoSchema } from '../Schema/loginUserInfoSchema';
import { toast } from 'react-toastify';
import { getPrevPath } from '../../Common/Function/CommonFunction';
import { SIGINUP_PATH_KEY } from '../../Siginup/Const/SiginupConst';


export function useLogin() {

    // ルーティング用
    const navigate = useNavigate();
    // ログインフラグ
    const setIsLogin = SetIsLoginContext.useCtx();
    // ログインユーザー情報(setter)
    const setLoginUserInfo = SetLoginUserInfoContext.useCtx();
    // ログインフォーム
    const form = useLoginForm({
        onSubmit: submit
    });
    // パス
    const pathName = location.pathname;
    // 前画面のパスを取得
    const prev = getPrevPath(PREV_PATH_KEY, ROUTER_PATH.HOME.ROOT);

    /**
     * ログインリクエスト
     */
    const postMutation = useMutationWrapper({
        url: `${VIDEO_MNG_PATH}${ENV.FRONT_USER_LOGIN}`,
        method: "POST",
        // 正常終了後の処理
        afSuccessFn: (res: unknown) => {

            // レスポンスの型チェック
            const resParsed = resSchema(loginUserInfoSchema).safeParse(res);

            if (!resParsed.success) {
                toast.error(`ログインできませんでした。時間をおいて再度お試しください。`);
                form.setFieldValue(`password`, ``);
                return;
            }

            const loginUserInfo = resParsed.data.data;

            setLoginUserInfo(loginUserInfo);
            setIsLogin(true);
            navigate(prev);
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
        navigate(`${ROUTER_PATH.SIGNUP}?${PREV_PATH_KEY}=${pathName}?${SIGINUP_PATH_KEY}=${prev}`);
    }

    /**
     * 戻るボタン
     */
    function clickBack() {
        navigate(prev);
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