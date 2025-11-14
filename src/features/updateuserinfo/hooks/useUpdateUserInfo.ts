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
import { useCreateYearList } from '../../../hooks/useCreateYearList';
import { UpdateUserInfoResponseType } from '../types/UpdateUserInfoResponseType';
import { UpdateUserInfoRequestType } from '../types/UpdateUserInfoRequestType';
import { LoginUserInfoType } from '../../../types/LoginUserInfoType';
import { ROUTER_PATH } from '../../../consts/RouterPath';
import useSwitch from '../../../hooks/useSwitch';
import { toast } from 'react-toastify';
import { PREV_PATH_KEY, VIDEO_MNG_PATH } from '../../../consts/CommonConst';
import { useQueryParams } from '../../../hooks/useQueryParams';
import { loginUserInfoSchema } from '../../login/schemas/loginUserInfoSchema';
import { getPrevPath } from '../../../utils/CommonFunction';
import { useUpdateUserInfoForm } from './useUpdateUserInfoForm';


export function useUpdateUserInfo() {

    // ルーティング用
    const navigate = useNavigate();
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // ログインユーザー情報
    const loginUserInfo = LoginUserInfoContext.useCtx();
    // ログインユーザー情報(setter)
    const setLoginUserInfo = SetLoginUserInfoContext.useCtx();
    // 年リスト
    const yearCoomboList = useCreateYearList();
    // 確認モーダルの表示フラグ
    const { flag: isOpenModal, on: openModal, off: closeModal } = useSwitch();
    // フォーム
    const { register, handleSubmit, formState: { errors } } = useUpdateUserInfoForm(loginUserInfo);
    // 前画面のパスを取得
    const prev = getPrevPath(PREV_PATH_KEY, ROUTER_PATH.HOME.ROOT);


    /**
     * 更新リクエスト
     */
    const postMutation = useMutationWrapper({
        url: `${VIDEO_MNG_PATH}${ENV.FRONT_USER_INFO}/${loginUserInfo.userId}`,
        method: "PUT",
        // 正常終了後の処理
        afSuccessFn: (res: unknown) => {

            // レスポンスの型チェック
            const resParsed = resSchema(loginUserInfoSchema).safeParse(res);

            if (!resParsed.success) {
                toast.error(`ユーザー情報を更新できませんでした。時間をおいて再度お試しください。`);
                closeModal();
                return;
            }

            const loginUserInfo = resParsed.data.data;

            toast.success("ユーザー情報を更新しました。");
            setLoginUserInfo(loginUserInfo);
            navigate(prev);
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {

            const errMessage = res.response.data.message;

            closeModal();
            //エラーメッセージを表示
            setErrMessage(`${errMessage}`);
        },
    });


    // 保存ボタンクリック時
    const handleSaveClick = handleSubmit((data) => {
        openModal();
    });


    // ユーザー情報更新実行
    const handleConfirm = handleSubmit((data) => {

        const userName = data.userName;
        const userBirthday = `${data.birthday.year}${data.birthday.month}${data.birthday.day}`;

        const body: UpdateUserInfoRequestType = {
            userName,
            userBirthday,
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
        navigate(prev);
    }

    return {
        errMessage,
        yearCoomboList,
        clickCancel,
        isOpenModal,
        closeModal,
        isLoading: postMutation.isLoading,
        register,
        handleSaveClick,
        handleConfirm,
        errors
    }
}