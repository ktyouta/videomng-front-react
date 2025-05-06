import React from 'react';
import { Home } from './Home/Component/Home';
import { Main } from './Main/Component/Main';
import { Navigate, Route, Routes } from 'react-router-dom';
import useQueryApp from './useQueryApp';
import { Login } from './Login/Component/Login';
import { createCtx } from './Common/Function/createCtx';
import { Siginup } from './Siginup/Component/Siginup';
import { LoginResponseType } from './Login/Type/LoginResponseType';
import { LoginUserInfoType } from './Common/Type/LoginUserInfoType';
import { ROUTER_PATH } from './Common/Const/RouterPath';
import { TOAST_INIT, ToastComponent, toastStatusType } from './Common/Component/ToastComponent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TOAST_DISPLAY_TIME } from './Common/Const/CommonConst';


// ログインフラグ
export const IsLoginContext = createCtx<boolean>();
// ログインフラグ(setter)
export const SetIsLoginContext = createCtx<React.Dispatch<React.SetStateAction<boolean>>>();
// ログインユーザー情報
export const LoginUserInfoContext = createCtx<LoginUserInfoType>();
// ログインユーザー情報(setter)
export const SetLoginUserInfoContext = createCtx<React.Dispatch<React.SetStateAction<LoginUserInfoType>>>();


function QueryApp() {

    console.log(`QueryApp render`);

    const {
        isLogin,
        setIsLogin,
        loginUserInfo,
        setLoginUserInfo, } = useQueryApp();

    return (
        <SetIsLoginContext.Provider value={setIsLogin}>
            <IsLoginContext.Provider value={isLogin}>
                {/* トースト */}
                <ToastContainer position="top-center" autoClose={TOAST_DISPLAY_TIME} />
                <Routes>
                    <Route path="/" element={<Navigate to={`${ROUTER_PATH.HOME}`} />} />
                    {/* ログイン */}
                    <Route
                        path={ROUTER_PATH.LOGIN}
                        element={isLogin ?
                            <Navigate to={ROUTER_PATH.HOME} />
                            :
                            <SetLoginUserInfoContext.Provider value={setLoginUserInfo}>
                                <Login />
                            </SetLoginUserInfoContext.Provider>
                        }
                    />
                    {/* アカウント作成 */}
                    <Route
                        path={ROUTER_PATH.SIGNUP}
                        element={
                            isLogin ?
                                <Navigate to={ROUTER_PATH.HOME} />
                                :
                                <SetLoginUserInfoContext.Provider value={setLoginUserInfo}>
                                    <Siginup />
                                </SetLoginUserInfoContext.Provider>
                        }
                    />
                    {/* コンテンツ */}
                    <Route
                        path="/*"
                        element={
                            <SetLoginUserInfoContext.Provider value={setLoginUserInfo}>
                                <LoginUserInfoContext.Provider value={loginUserInfo}>
                                    <Main />
                                </LoginUserInfoContext.Provider>
                            </SetLoginUserInfoContext.Provider>
                        }
                    />
                </Routes>
            </IsLoginContext.Provider>
        </SetIsLoginContext.Provider>
    );
}

export default QueryApp;
