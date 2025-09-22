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
import { UpdateUserInfoResponseType } from '../Type/UpdateUserInfoResponseType';
import { UpdateUserInfoRequestType } from '../Type/UpdateUserInfoRequestType';
import { LoginUserInfoType } from '../../Common/Type/LoginUserInfoType';
import { ROUTER_PATH } from '../../Common/Const/RouterPath';
import useSwitch from '../../Common/Hook/useSwitch';
import { toast } from 'react-toastify';
import { VIDEO_MNG_PATH } from '../../Common/Const/CommonConst';
import { useQueryParams } from '../../Common/Hook/useQueryParams';
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
    // クエリパラメータ(遷移元)
    const previouspath = (() => {
        const { previouspath } = useQueryParams();
        return decodeURIComponent(previouspath);
    })();
    // フォーム
    const { register, handleSubmit, formState: { errors } } = useUpdateUserInfoForm(loginUserInfo);


    /**
     * 更新リクエスト
     */
    const postMutation = useMutationWrapper({
        url: `${VIDEO_MNG_PATH}${ENV.FRONT_USER_INFO}/${loginUserInfo.userId}`,
        method: "PUT",
        // 正常終了後の処理
        afSuccessFn: (res: resType<LoginUserInfoType>) => {

            const loginUserInfo = res.data;

            toast.success("ユーザー情報を更新しました。");
            setLoginUserInfo(loginUserInfo);
            navigate(previouspath ?? ROUTER_PATH.HOME.ROOT);
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
        navigate(previouspath ?? ROUTER_PATH.HOME.ROOT);
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