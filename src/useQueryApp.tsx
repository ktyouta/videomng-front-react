import { useState } from 'react';
import { LoginResponseType } from './Login/Type/LoginResponseType';


function useQueryApp() {

    // ログインフラグ
    const [isLogin, setIsLogin] = useState(false);
    // ログインユーザー情報
    const [loginUserInfo, setLoginUserInfo] = useState<LoginResponseType>({ userName: `` });

    return {
        isLogin,
        setIsLogin,
        loginUserInfo,
        setLoginUserInfo,
    }
}

export default useQueryApp;