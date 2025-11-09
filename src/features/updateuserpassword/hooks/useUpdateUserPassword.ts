import React, { RefObject, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import ENV from '../../../env.json';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { refType } from '../../../components/BaseTextbox';
import useMutationWrapper from '../../../hooks/useMutationWrapper';
import { errResType, resSchema, resType } from '../../../hooks/useMutationWrapperBase';
import { useSetAtom } from 'jotai';
import { useSetGlobalAtom } from '../../../hooks/useGlobalAtom';
import { LoginUserInfoContext, SetIsLoginContext, SetLoginUserInfoContext } from '../../../QueryApp';
import { comboType } from '../../../components/ComboComponent';
import { useCreateYearList } from '../../../hooks/useCreateYearList';
import { ROUTER_PATH } from '../../../consts/RouterPath';
import { UpdateUserInfoRequestType } from '../../updateuserinfo/types/UpdateUserInfoRequestType';
import useSwitch from '../../../hooks/useSwitch';
import { UpdateUserPasswordRequestType } from '../types/UpdateUserPasswordRequestType';
import { toast } from 'react-toastify';
import { VIDEO_MNG_PATH } from '../../../consts/CommonConst';
import { useQueryParams } from '../../../hooks/useQueryParams';
import { useUpdateUserPasswordForm } from './useUpdateUserPasswordForm';
import { UPDATEUSERPASSWORD_PREV_PATH_KEY } from '../const/UpdateUserPasswordConst';


export function useUpdateUserPassword() {

    // ルーティング用
    const navigate = useNavigate();
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // ログインユーザー情報
    const loginUserInfo = LoginUserInfoContext.useCtx();
    // 確認モーダルの表示フラグ
    const { flag: isOpenModal, on: openModal, off: closeModal } = useSwitch();
    // URL情報
    const location = useLocation();
    // クエリパラメータ(遷移元情報)
    const queryParam = location.search.replace(`?${UPDATEUSERPASSWORD_PREV_PATH_KEY}=`, ``);
    // フォーム
    const { register, handleSubmit, formState: { errors }, reset } = useUpdateUserPasswordForm();

    /**
     * 更新リクエスト
     */
    const postMutation = useMutationWrapper({
        url: `${VIDEO_MNG_PATH}${ENV.FRONT_USER_PASSWORD_ID}/${loginUserInfo.userId}`,
        method: "PUT",
        // 正常終了後の処理
        afSuccessFn: (res: unknown) => {

            // レスポンスの型チェック
            const resParsed = resSchema().safeParse(res);

            if (!resParsed.success) {
                toast.error(`パスワードの更新に失敗しました。時間をおいて再度お試しください。`);
                closeModal();
                return;
            }

            toast.success("パスワードを更新しました。");
            navigate(queryParam ?? ROUTER_PATH.HOME.ROOT);
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
        navigate(queryParam ?? ROUTER_PATH.HOME.ROOT);
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