import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGIN_USER_INFO_INIT } from '../../consts/CommonConst';
import { ROUTER_PATH } from '../../consts/RouterPath';
import { getAuthCheck } from '../../features/api/getAuthCheck';
import { resSchema } from '../../hooks/useMutationWrapperBase';
import { registerResetLogin } from '../../store/accessTokenStore';
import { LoginUserInfoType } from '../../types/userinfo/LoginUserInfoType';
import { AuthCheckResponseSchema } from '../schemas/AuthCheckResponseSchema';


function useQueryApp() {

    // ログインフラグ
    const [isLogin, setIsLogin] = useState(false);
    // ログインユーザー情報
    const [loginUserInfo, setLoginUserInfo] = useState<LoginUserInfoType>(LOGIN_USER_INFO_INIT);
    // 認証チェック済みフラグ
    const [isCheckedAuth, setIsCheckedAuth] = useState(false);
    // ルーティング用
    const navigate = useNavigate();

    /**
     * ログイン画面に遷移
     */
    function moveLogin() {
        navigate(`${ROUTER_PATH.LOGIN}`);
    }

    // 認証チェック
    getAuthCheck({
        onSuccess: (res: unknown) => {

            // レスポンスの型チェック
            const resParsed = resSchema(AuthCheckResponseSchema).safeParse(res);

            if (!resParsed.success) {
                return;
            }

            const resData = resParsed.data.data;

            setLoginUserInfo(resData.userInfo);
            setIsLogin(true);
            setIsCheckedAuth(true);
        },
        onError: (err) => {
            setIsLogin(false);
            setIsCheckedAuth(true);
        }
    });

    // ログインリセット処理を登録
    useEffect(() => {
        {
            registerResetLogin({
                setIsLogin,
                moveLogin
            });
        }
    }, []);

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