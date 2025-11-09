import React from 'react';
import { Home } from './features/home/components/Home';
import { Main } from './features/main/components/Main';
import { Navigate, Route, Routes } from 'react-router-dom';
import useQueryApp from './useQueryApp';
import { Login } from './features/login/components/Login';
import { createCtx } from './utils/createCtx';
import { Siginup } from './features/signup/components/Siginup';
import { LoginUserInfoType } from './types/LoginUserInfoType';
import { ROUTER_PATH } from './consts/RouterPath';
import { TOAST_INIT, ToastComponent, toastStatusType } from './components/ToastComponent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TOAST_DISPLAY_TIME } from './consts/CommonConst';
import { UpdateUserInfo } from './features/updateuserinfo/components/UpdateUserInfo';
import { UpdateUserPassword } from './features/updateuserpassword/components/UpdateUserPassword';
import styled from 'styled-components';
import LoadingBase from './components/LoadingBase';
import Loading from './components/Loading';


const LoadingScreenDiv = styled.div`
  height:100vh;
  background-color: rgb(0, 5, 13);
`;

const LoadingParent = styled.div`
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%); 
`;

// ログインフラグ
export const IsLoginContext = createCtx<boolean>();
// ログインフラグ(setter)
export const SetIsLoginContext = createCtx<React.Dispatch<React.SetStateAction<boolean>>>();
// ログインユーザー情報
export const LoginUserInfoContext = createCtx<LoginUserInfoType>();
// ログインユーザー情報(setter)
export const SetLoginUserInfoContext = createCtx<React.Dispatch<React.SetStateAction<LoginUserInfoType>>>();
// 認証チェック済みフラグ
export const IsCheckedAuthContext = createCtx<boolean>();


function QueryApp() {

    console.log(`QueryApp render`);

    const {
        isLogin,
        setIsLogin,
        loginUserInfo,
        setLoginUserInfo,
        isCheckedAuth, } = useQueryApp();

    return (
        <SetIsLoginContext.Provider value={setIsLogin}>
            <IsLoginContext.Provider value={isLogin}>
                {/* トースト */}
                <ToastContainer
                    position="top-center"
                    autoClose={TOAST_DISPLAY_TIME}
                />
                <Routes>
                    <Route path="/" element={<Navigate to={`${ROUTER_PATH.HOME.ROOT}`} />} />
                    {/* ログイン */}
                    <Route
                        path={ROUTER_PATH.LOGIN}
                        element={isLogin ?
                            <Navigate to={ROUTER_PATH.HOME.ROOT} />
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
                                <Navigate to={ROUTER_PATH.HOME.ROOT} />
                                :
                                <SetLoginUserInfoContext.Provider value={setLoginUserInfo}>
                                    <Siginup />
                                </SetLoginUserInfoContext.Provider>
                        }
                    />
                    {/* ユーザー情報更新 */}
                    {
                        isLogin &&
                        <Route
                            path={ROUTER_PATH.UPDATE_USER_INFO}
                            element={
                                <LoginUserInfoContext.Provider value={loginUserInfo}>
                                    <SetLoginUserInfoContext.Provider value={setLoginUserInfo}>
                                        <UpdateUserInfo />
                                    </SetLoginUserInfoContext.Provider>
                                </LoginUserInfoContext.Provider>
                            }
                        />
                    }
                    {/* パスワード変更 */}
                    {
                        isLogin &&
                        <Route
                            path={ROUTER_PATH.UPDATE_USER_PASSWORD}
                            element={
                                <LoginUserInfoContext.Provider value={loginUserInfo}>
                                    <SetLoginUserInfoContext.Provider value={setLoginUserInfo}>
                                        <UpdateUserPassword />
                                    </SetLoginUserInfoContext.Provider>
                                </LoginUserInfoContext.Provider>
                            }
                        />
                    }
                    {/* コンテンツ */}
                    <Route
                        path="/*"
                        element={
                            isCheckedAuth ?
                                <IsCheckedAuthContext.Provider value={isCheckedAuth}>
                                    <SetLoginUserInfoContext.Provider value={setLoginUserInfo}>
                                        <LoginUserInfoContext.Provider value={loginUserInfo}>
                                            <Main />
                                        </LoginUserInfoContext.Provider>
                                    </SetLoginUserInfoContext.Provider>
                                </IsCheckedAuthContext.Provider>
                                :
                                <LoadingScreenDiv>
                                    <LoadingParent>
                                        <Loading />
                                    </LoadingParent>
                                </LoadingScreenDiv>
                        }
                    />
                </Routes>
            </IsLoginContext.Provider>
        </SetIsLoginContext.Provider>
    );
}

export default QueryApp;
