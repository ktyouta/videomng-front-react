import { useState } from 'react';


function useQueryApp() {

    // ログインフラグ
    const [isLogin, setIsLogin] = useState(false);

    return {
        isLogin,
        setIsLogin,
    }
}

export default useQueryApp;