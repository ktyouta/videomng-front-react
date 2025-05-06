import { useState } from 'react';
import { LoginResponseType } from './Login/Type/LoginResponseType';
import { LoginUserInfoType } from './Common/Type/LoginUserInfoType';
import { LOGIN_USER_INFO_INIT } from './Common/Const/CommonConst';
import { TOAST_INIT } from './Common/Component/ToastComponent';


function useQueryApp() {

    // ログインフラグ
    const [isLogin, setIsLogin] = useState(false);
    // ログインユーザー情報
    const [loginUserInfo, setLoginUserInfo] = useState<LoginUserInfoType>(LOGIN_USER_INFO_INIT);
    // トーストの表示状態
    const [toastStatus, setToastStatus] = useState(TOAST_INIT);

    return {
        isLogin,
        setIsLogin,
        loginUserInfo,
        setLoginUserInfo,
        toastStatus,
        setToastStatus,
    }
}

export default useQueryApp;