import { useState } from 'react';
import { LoginUserInfoType } from './types/LoginUserInfoType';
import { LOGIN_USER_INFO_INIT, VIDEO_MNG_PATH } from './consts/CommonConst';
import { TOAST_INIT } from './components/ToastComponent';
import { resType } from './hooks/useMutationWrapperBase';
import useQueryWrapper from './hooks/useQueryWrapper';
import ENV from "./env.json";


function useQueryApp() {

    // ログインフラグ
    const [isLogin, setIsLogin] = useState(false);
    // ログインユーザー情報
    const [loginUserInfo, setLoginUserInfo] = useState<LoginUserInfoType>(LOGIN_USER_INFO_INIT);
    // 認証チェック済みフラグ
    const [isCheckedAuth, setIsCheckedAuth] = useState(false);


    // 認証チェック
    useQueryWrapper(
        {
            url: `${VIDEO_MNG_PATH}${ENV.FRONT_USER_CHECK_AUTH}`,
            afSuccessFn: (res: resType<LoginUserInfoType>) => {

                const loginUserInfo = res.data;

                setLoginUserInfo(loginUserInfo);
                setIsLogin(true);
                setIsCheckedAuth(true);
            },
            afErrorFn: () => {
                setIsLogin(false);
                setIsCheckedAuth(true);
            }
        }
    );

    return {
        isLogin,
        setIsLogin,
        loginUserInfo,
        setLoginUserInfo,
        isCheckedAuth,
        setIsCheckedAuth,
    }
}

export default useQueryApp;