import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import Loading from '../../components/Loading';
import { TOAST_DISPLAY_TIME } from '../../consts/CommonConst';
import { ROUTER_PATH } from '../../consts/RouterPath';
import { Login } from '../../features/login/components/Login';
import { Main } from '../../features/main/components/Main';
import { Siginup } from '../../features/signup/components/Siginup';
import { UpdateUserInfo } from '../../features/updateuserinfo/components/UpdateUserInfo';
import { UpdateUserPassword } from '../../features/updateuserpassword/components/UpdateUserPassword';
import { LoginUserInfoType } from '../../types/userinfo/LoginUserInfoType';
import { createCtx } from '../../utils/createCtx';
import useQueryApp from '../hooks/useQueryApp';


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
        <IsLoginContext.Provider value={isLogin}>
            <SetIsLoginContext.Provider value={setIsLogin}>
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
            </SetIsLoginContext.Provider>
        </IsLoginContext.Provider>
    );
}

export default QueryApp;
