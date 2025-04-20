import { useAtomValue } from 'jotai';
import { useCookies } from 'react-cookie';
import { isLoginAtom } from './Common/Atom/CommonAtom';
import { useGlobalAtomValue } from './Common/Hook/useGlobalAtom';


function useQueryApp() {

    // ログインフラグ
    const isLogin = useGlobalAtomValue(isLoginAtom);

    return {
        isLogin,
    }
}

export default useQueryApp;