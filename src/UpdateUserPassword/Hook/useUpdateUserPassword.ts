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
import { LoginUserInfoType } from '../../Common/Type/LoginUserInfoType';
import { ROUTER_PATH } from '../../Common/Const/RouterPath';
import { UpdateUserInfoRequestType } from '../../UpdateUserInfo/Type/UpdateUserInfoRequestType';
import useSwitch from '../../Common/Hook/useSwitch';
import { UpdateUserPasswordRequestType } from '../Type/UpdateUserPasswordRequestType';
import { toast } from 'react-toastify';


export function useUpdateUserPassword() {

    // 現在のパスワード参照用
    const currentPasswordRef: RefObject<refType> = useRef(null);
    // 新しいパスワード参照用
    const newPasswordRef: RefObject<refType> = useRef(null);
    // 確認用パスワード参照用
    const confirmPasswordRef: RefObject<refType> = useRef(null);
    // ルーティング用
    const navigate = useNavigate();
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // ログインユーザー情報
    const loginUserInfo = LoginUserInfoContext.useCtx();
    // 確認モーダルの表示フラグ
    const { flag: isOpenModal, on: openModal, off: closeModal } = useSwitch();

    /**
     * 更新リクエスト
     */
    const postMutation = useMutationWrapper({
        url: `${ENV.PROTOCOL}${ENV.DOMAIN}${ENV.PORT}${ENV.FRONT_USER_PASSWORD_ID}/${loginUserInfo.userId}`,
        method: "PUT",
        // 正常終了後の処理
        afSuccessFn: (res: resType<LoginUserInfoType>) => {

            toast.success("パスワードを更新しました。");
            navigate(ROUTER_PATH.HOME);
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {

            const errMessage = res.response.data.message;

            closeModal();
            //エラーメッセージを表示
            setErrMessage(`${errMessage}`);
        },
    });


    /**
     * 保存ボタン押下
     */
    function clickUpdateUserInfoBtn() {

        const currentPassword = currentPasswordRef.current?.refValue as string;
        const newPassword = newPasswordRef.current?.refValue as string;
        const confirmPassword = confirmPasswordRef.current?.refValue as string;

        // ユーザーIDが存在しない
        if (!loginUserInfo.userId) {
            setErrMessage(`パスワードを更新できません。再度ログインし直してください。`);
            return;
        }

        // 現在のパスワード未入力
        if (!currentPassword) {
            setErrMessage(`現在のパスワードが未入力です。`);
            return;
        }

        // 新しいパスワード未入力
        if (!newPassword) {
            setErrMessage(`新しいパスワードが未入力です。`);
            return;
        }

        // 確認用パスワード未入力
        if (!confirmPassword) {
            setErrMessage(`確認用パスワードが未入力です。`);
            return;
        }

        // 確認用モーダル展開
        openModal();
    }

    /**
     * キャンセルボタン押下
     */
    function clickCancel() {
        navigate(ROUTER_PATH.HOME);
    }

    /**
     * 更新処理実行
     */
    function executeUpdate() {

        const currentPassword = currentPasswordRef.current?.refValue as string;
        const newPassword = newPasswordRef.current?.refValue as string;
        const confirmPassword = confirmPasswordRef.current?.refValue as string;

        const body: UpdateUserPasswordRequestType = {
            currentPassword,
            newPassword,
            confirmPassword,

        };

        // 更新リクエスト呼び出し
        postMutation.mutate(body);
    }

    return {
        currentPasswordRef,
        newPasswordRef,
        confirmPasswordRef,
        clickUpdateUserInfoBtn,
        errMessage,
        clickCancel,
        isOpenModal,
        closeModal,
        executeUpdate,
    }
}