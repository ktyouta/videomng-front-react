import React, { RefObject, useContext, useEffect, useMemo, useRef, useState } from 'react';
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
import { VIDEO_MNG_PATH } from '../../Common/Const/CommonConst';
import { useQueryParams } from '../../Common/Hook/useQueryParams';
import { useUpdateUserPasswordForm } from './useUpdateUserPasswordForm';


export function useUpdateUserPassword() {

    // ルーティング用
    const navigate = useNavigate();
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // ログインユーザー情報
    const loginUserInfo = LoginUserInfoContext.useCtx();
    // 確認モーダルの表示フラグ
    const { flag: isOpenModal, on: openModal, off: closeModal } = useSwitch();
    // クエリパラメータ(遷移元)
    const { previouspath } = useQueryParams();
    // フォーム
    const { register, handleSubmit, formState: { errors }, reset } = useUpdateUserPasswordForm();

    /**
     * 更新リクエスト
     */
    const postMutation = useMutationWrapper({
        url: `${VIDEO_MNG_PATH}${ENV.FRONT_USER_PASSWORD_ID}/${loginUserInfo.userId}`,
        method: "PUT",
        // 正常終了後の処理
        afSuccessFn: (res: resType<LoginUserInfoType>) => {

            toast.success("パスワードを更新しました。");
            navigate(previouspath ?? ROUTER_PATH.HOME.ROOT);
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {

            const errMessage = res.response.data.message;

            closeModal();
            //エラーメッセージを表示
            setErrMessage(`${errMessage}`);

            reset({
                currentPassword: ``,
                newPassword: ``,
                confirmPassword: ``,
            });
        },
    });


    // 保存ボタンクリック時
    const handleSaveClick = handleSubmit((data) => {
        openModal();
    });


    // パスワード更新実行
    const handleConfirm = handleSubmit((data) => {

        const currentPassword = data.currentPassword;
        const newPassword = data.newPassword;
        const confirmPassword = data.confirmPassword;

        const body: UpdateUserPasswordRequestType = {
            currentPassword,
            newPassword,
            confirmPassword,

        };

        // 更新リクエスト呼び出し
        postMutation.mutate(body);
    },
        () => {
            closeModal();
        }
    );

    /**
     * キャンセルボタン押下
     */
    function clickCancel() {
        navigate(previouspath ?? ROUTER_PATH.HOME.ROOT);
    }

    return {
        errMessage,
        clickCancel,
        isOpenModal,
        closeModal,
        isLoading: postMutation.isLoading,
        register,
        errors,
        handleSaveClick,
        handleConfirm,
    }
}