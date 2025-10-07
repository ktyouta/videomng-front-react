import React, { RefObject, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import ENV from '../../env.json';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { refType } from '../../Common/Component/BaseTextbox';
import useMutationWrapper from '../../Common/Hook/useMutationWrapper';
import { errResType, resSchema, resType } from '../../Common/Hook/useMutationWrapperBase';
import { useSetAtom } from 'jotai';
import { useSetGlobalAtom } from '../../Common/Hook/useGlobalAtom';
import { SetIsLoginContext, SetLoginUserInfoContext } from '../../QueryApp';
import { SiginupRequestType } from '../Type/SiginupRequestType';
import { comboType } from '../../Common/Component/ComboComponent';
import { useCreateYearList } from '../../Common/Hook/useCreateYearList';
import { LoginUserInfoType } from '../../Common/Type/LoginUserInfoType';
import { ROUTER_PATH } from '../../Common/Const/RouterPath';
import useSwitch from '../../Common/Hook/useSwitch';
import { VIDEO_MNG_PATH } from '../../Common/Const/CommonConst';
import { useQueryParams } from '../../Common/Hook/useQueryParams';
import { useSignupForm } from './useSignupForm';
import { LOGIN_PREV_PATH_KEY } from '../../Login/Const/LoginConst';
import { SIGNUP_PREV_PATH_KEY } from '../Const/SignupConst';
import { loginUserInfoSchema } from '../../Login/Schema/loginUserInfoSchema';
import { toast } from 'react-toastify';


export function useSiginup() {

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
    // 確認モーダルの表示フラグ
    const { flag: isOpenModal, on: openModal, off: closeModal } = useSwitch();
    // URL情報
    const location = useLocation();
    // クエリパラメータ(遷移元情報)
    const queryParam = location.search.replace(`?${SIGNUP_PREV_PATH_KEY}=`, ``);
    // フォーム
    const { register, handleSubmit, formState: { errors }, reset } = useSignupForm();


    /**
     * 登録リクエスト
     */
    const postMutation = useMutationWrapper({
        url: `${VIDEO_MNG_PATH}${ENV.FRONT_USER_INFO}`,
        method: "POST",
        // 正常終了後の処理
        afSuccessFn: (res: unknown) => {

            // レスポンスの型チェック
            const resParsed = resSchema(loginUserInfoSchema).safeParse(res);

            if (!resParsed.success) {
                toast.error(`アカウントの作成に失敗しました。時間をおいて再度お試しください。`);
                closeModal();
                return;
            }

            const loginUserInfo = resParsed.data.data;

            setLoginUserInfo(loginUserInfo);
            setIsLogin(true);
            navigate(queryParam);
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {

            const errMessage = res.response.data.message;

            closeModal();
            //エラーメッセージを表示
            setErrMessage(`${errMessage}`);

            reset({
                password: ``,
                confirmPassword: ``,
            });
        },
    });

    // 登録ボタンクリック時
    const handleSiginupClick = handleSubmit((data) => {
        openModal();
    });


    // ユーザー登録実行
    const handleConfirm = handleSubmit((data) => {

        const userName = data.userName;
        const password = data.password
        const confirmPassword = data.confirmPassword;
        const userBirthday = `${data.birthday.year}${data.birthday.month}${data.birthday.day}`;


        const body: SiginupRequestType = {
            userName,
            password,
            userBirthday,
            confirmPassword
        };

        // 登録リクエスト呼び出し
        postMutation.mutate(body);
    },
        () => {
            closeModal();
        }
    );

    /**
     * 戻るボタン押下
     */
    function clickBack() {

        let query = ``;

        if (queryParam) {
            query = `?${LOGIN_PREV_PATH_KEY}=${queryParam}`;
        }

        navigate(`${ROUTER_PATH.LOGIN}${query}`);
    }

    return {
        errMessage,
        yearCoomboList,
        clickBack,
        isOpenModal,
        closeModal,
        isLoading: postMutation.isLoading,
        register,
        errors,
        handleSiginupClick,
        handleConfirm,
    }
}