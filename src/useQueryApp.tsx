import { useCookies } from 'react-cookie';


function useQueryApp() {

    //認証クッキー
    const [cookies] = useCookies();

    return {
        cookies,
    }
}

export default useQueryApp;