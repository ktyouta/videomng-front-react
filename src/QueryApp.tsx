import React from 'react';
import { Home } from './Home/Component/Home';
import { Main } from './Main/Component/Main';
import { Navigate, Route, Routes } from 'react-router-dom';
import useQueryApp from './useQueryApp';
import { LOGIN_PATH } from './Login/Const/LoginConst';
import { Login } from './Login/Component/Login';
import { HOME_ROOT_PATH } from './Home/Const/HomeConst';
import { createCtx } from './Common/Function/createCtx';
import { SIGNUP_PATH } from './Siginup/Const/SiginupConst';
import { Siginup } from './Siginup/Component/Siginup';
import { LoginResponseType } from './Login/Type/LoginResponseType';
import { LoginUserInfoType } from './Common/Type/LoginUserInfoType';

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
                <Routes>
                    <Route path="/" element={<Navigate to={`${HOME_ROOT_PATH}`} />} />
                    <Route
                        path={LOGIN_PATH}
                        element={isLogin ?
                            <Navigate to={HOME_ROOT_PATH} />
                            :
                            <SetLoginUserInfoContext.Provider value={setLoginUserInfo}>
                                <Login />
                            </SetLoginUserInfoContext.Provider>
                        }
                    />
                    <Route
                        path={SIGNUP_PATH}
                        element={
                            isLogin ?
                                <Navigate to={HOME_ROOT_PATH} />
                                :
                                <SetLoginUserInfoContext.Provider value={setLoginUserInfo}>
                                    <Siginup />
                                </SetLoginUserInfoContext.Provider>
                        }
                    />
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
