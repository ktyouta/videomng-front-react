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

// ログインフラグ
export const IsLoginContext = createCtx<boolean>();
// ログインフラグ(setter)
export const SetIsLoginContext = createCtx<React.Dispatch<React.SetStateAction<boolean>>>();
// ログインユーザー情報
export const LoginUserInfoContext = createCtx<LoginUserInfoType>();
// ログインユーザー情報(setter)
export const SetLoginUserInfoContext = createCtx<React.Dispatch<React.SetStateAction<LoginUserInfoType>>>();
// トーストの表示状態
export const ToastStatusContext = createCtx<toastStatusType>();
// トーストの表示状態(setter)
export const SetToastStatusContext = createCtx<React.Dispatch<React.SetStateAction<toastStatusType>>>();


function QueryApp() {

    console.log(`QueryApp render`);

    const {
        isLogin,
        setIsLogin,
        loginUserInfo,
        setLoginUserInfo,
        toastStatus,
        setToastStatus, } = useQueryApp();

    return (
        <SetIsLoginContext.Provider value={setIsLogin}>
            <IsLoginContext.Provider value={isLogin}>
                <ToastStatusContext.Provider value={toastStatus}>
                    <SetToastStatusContext.Provider value={setToastStatus}>
                        {/* トースト */}
                        <ToastComponent
                            status={toastStatus}
                        />
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
                    </SetToastStatusContext.Provider>
                </ToastStatusContext.Provider>
            </IsLoginContext.Provider>
        </SetIsLoginContext.Provider>
    );
}

export default QueryApp;
