import { useAtomValue } from 'jotai';
import { useCookies } from 'react-cookie';
import { isLoginAtom } from './Common/Atom/CommonAtom';


function useQueryApp() {

    // ログインフラグ
    const isLogin = useAtomValue(isLoginAtom);

    return {
        isLogin,
    }
}

export default useQueryApp;