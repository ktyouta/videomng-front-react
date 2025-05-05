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
import { LoginUserInfoContext, SetIsLoginContext, SetLoginUserInfoContext } from '../../QueryApp';
import { comboType } from '../../Common/Component/ComboComponent';
import { useCreateYearList } from '../../Common/Hook/useCreateYearList';
import { UpdateUserInfoResponseType } from '../Type/UpdateUserInfoResponseType';
import { UpdateUserInfoRequestType } from '../Type/UpdateUserInfoRequestType';
import { LoginUserInfoType } from '../../Common/Type/LoginUserInfoType';
import { ROUTER_PATH } from '../../Common/Const/RouterPath';
import useSwitch from '../../Common/Hook/useSwitch';


export function useUpdateUserInfo() {

    // ユーザー名参照用
    const userNameRef: RefObject<refType> = useRef(null);
    // 生年月日(年)参照用
    const userBirthdayYearRef: RefObject<refType> = useRef(null);
    // 生年月日(月)参照用
    const userBirthdayMonthRef: RefObject<refType> = useRef(null);
    // 生年月日(日)参照用
    const userBirthdayDayRef: RefObject<refType> = useRef(null);
    // ルーティング用
    const navigate = useNavigate();
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // ログインユーザー情報(setter)
    const setLoginUserInfo = SetLoginUserInfoContext.useCtx();
    // 年リスト
    const yearCoomboList = useCreateYearList();
    // 更新前ユーザー情報
    const loginUserInfo = LoginUserInfoContext.useCtx();
    // 確認モーダルの表示フラグ
    const { flag: isOpenModal, on: openModal, off: closeModal } = useSwitch();

    /**
     * 更新リクエスト
     */
    const postMutation = useMutationWrapper({
        url: `${ENV.PROTOCOL}${ENV.DOMAIN}${ENV.PORT}${ENV.FRONT_USER_INFO}/${loginUserInfo.userId}`,
        method: "PUT",
        // 正常終了後の処理
        afSuccessFn: (res: resType<LoginUserInfoType>) => {

            const loginUserInfo = res.data;

            alert(`ユーザー情報を更新しました。`);
            setLoginUserInfo(loginUserInfo);
            navigate(ROUTER_PATH.HOME);
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {

            const errMessage = res.response.data.message;

            //エラーメッセージを表示
            setErrMessage(`${errMessage}`);
        },
    });


    /**
     * 保存ボタン押下
     */
    function clickUpdateUserInfoBtn() {

        const userName = userNameRef.current?.refValue as string;
        const userBirthday = `${userBirthdayYearRef.current?.refValue}${userBirthdayMonthRef.current?.refValue}${userBirthdayDayRef.current?.refValue}`;

        // ユーザーIDが存在しない
        if (!loginUserInfo.userId) {
            setErrMessage(`ユーザー情報を更新できません。`);
            return;
        }

        // ユーザーID未入力
        if (!userName) {
            setErrMessage(`ユーザー名が未入力です。`);
            return;
        }

        // 生年月日未選択
        if (!userBirthday) {
            setErrMessage(`生年月日が未選択です。`);
            return;
        }

        // 確認用モーダルを展開する
        openModal();


    }

    /**
     * キャンセルボタン押下
     */
    function clickCancel() {
        navigate(ROUTER_PATH.HOME);
    }

    /**
     * ユーザー情報更新実行
     */
    function executeUpdate() {

        const userName = userNameRef.current?.refValue as string;
        const userBirthday = `${userBirthdayYearRef.current?.refValue}${userBirthdayMonthRef.current?.refValue}${userBirthdayDayRef.current?.refValue}`;

        const body: UpdateUserInfoRequestType = {
            userName,
            userBirthday,
        };

        // 更新リクエスト呼び出し
        postMutation.mutate(body);
    }

    return {
        userNameRef,
        clickUpdateUserInfoBtn,
        errMessage,
        userBirthdayYearRef,
        userBirthdayMonthRef,
        userBirthdayDayRef,
        yearCoomboList,
        loginUserInfo,
        clickCancel,
        isOpenModal,
        closeModal,
        executeUpdate,
    }
}