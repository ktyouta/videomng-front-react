import React from 'react';
import { Home } from './Home/Component/Home';
import { Main } from './Main/Component/Main';
import { Navigate, Route, Routes } from 'react-router-dom';
import useQueryApp from './useQueryApp';
import { LOGIN_PATH } from './Login/Const/LoginConst';
import { Login } from './Login/Component/Login';
import { HOME_ROOT_PATH } from './Home/Const/HomeConst';


function QueryApp() {

    console.log(`QueryApp render`);

    const { isLogin } = useQueryApp();

    return (
        <React.Fragment>
            <Routes>
                <Route
                    path={LOGIN_PATH}
                    element={isLogin ? <Navigate to={HOME_ROOT_PATH} /> : <Login />}
                />
                <Route
                    path="/*"
                    element={<Main />}
                />
            </Routes>
        </React.Fragment>
    );
}

export default QueryApp;
