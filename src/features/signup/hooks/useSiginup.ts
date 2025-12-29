import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { SetIsLoginContext, SetLoginUserInfoContext } from '../../../app/components/QueryApp';
import { PREV_PATH_KEY, VIDEO_MNG_PATH } from '../../../consts/CommonConst';
import { ROUTER_PATH } from '../../../consts/RouterPath';
import ENV from '../../../env.json';
import { useCreateYearList } from '../../../hooks/useCreateYearList';
import useMutationWrapper from '../../../hooks/useMutationWrapper';
import { errResType, resSchema } from '../../../hooks/useMutationWrapperBase';
import useSwitch from '../../../hooks/useSwitch';
import { getPrevPath } from '../../../utils/CommonFunction';
import { loginResponseSchema } from '../../login/schemas/loginResponseSchema';
import { SIGINUP_PATH_KEY } from '../const/SiginupConst';
import { SiginupRequestType } from '../types/SiginupRequestType';
import { useSignupForm } from './useSignupForm';


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
    // フォーム
    const { register, handleSubmit, formState: { errors }, reset } = useSignupForm();
    // 前画面のパスを取得
    const prev = getPrevPath(PREV_PATH_KEY, ROUTER_PATH.LOGIN);
    // 登録後のパスを取得
    const next = getPrevPath(SIGINUP_PATH_KEY, ROUTER_PATH.HOME.ROOT);

    /**
     * 登録リクエスト
     */
    const postMutation = useMutationWrapper({
        url: `${VIDEO_MNG_PATH}${ENV.FRONT_USER_INFO}`,
        method: "POST",
        // 正常終了後の処理
        afSuccessFn: (res: unknown) => {

            // レスポンスの型チェック
            const resParsed = resSchema(loginResponseSchema).safeParse(res);

            if (!resParsed.success) {
                toast.error(`アカウントの作成に失敗しました。時間をおいて再度お試しください。`);
                closeModal();
                return;
            }

            const resData = resParsed.data.data;

            setLoginUserInfo(resData.userInfo);
            setIsLogin(true);
            navigate(next);
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
        closeModal();
    });

    /**
     * 戻るボタン押下
     */
    function clickBack() {

        let prevPath = prev;

        const nextIndex = prev.indexOf(`&${SIGINUP_PATH_KEY}`);

        if (nextIndex !== -1) {
            prevPath = prev.slice(0, nextIndex);
        }

        navigate(prevPath);
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