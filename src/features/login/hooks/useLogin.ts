import React from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { SetIsLoginContext, SetLoginUserInfoContext } from '../../../app/components/QueryApp';
import { PREV_PATH_KEY, VIDEO_MNG_PATH } from '../../../consts/CommonConst';
import { ROUTER_PATH } from '../../../consts/RouterPath';
import ENV from '../../../env.json';
import useMutationWrapper from '../../../hooks/useMutationWrapper';
import { errResType, resSchema } from '../../../hooks/useMutationWrapperBase';
import { updateAccessToken } from '../../../lib/accessTokenStore';
import { getPrevPath } from '../../../utils/CommonFunction';
import { SIGINUP_PATH_KEY } from '../../signup/const/SiginupConst';
import { loginResponseSchema } from '../schemas/loginResponseSchema';
import { LoginFormType } from '../types/LoginFormType';
import { useLoginForm } from './useLoginForm';


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
            const resParsed = resSchema(loginResponseSchema).safeParse(res);

            if (!resParsed.success) {
                toast.error(`ログインできませんでした。時間をおいて再度お試しください。`);
                form.setFieldValue(`password`, ``);
                return;
            }

            const resData = resParsed.data.data;

            setLoginUserInfo(resData.userInfo);
            updateAccessToken(resData.accessToken);
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
        navigate(`${ROUTER_PATH.SIGNUP}?${PREV_PATH_KEY}=${pathName}?${PREV_PATH_KEY}=${prev}&${SIGINUP_PATH_KEY}=${prev}`);
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