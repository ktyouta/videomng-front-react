import { useEffect, useState } from 'react';
import { registerAccessTokenSetter } from '../../lib/accessTokenStore';


export function useTokenProvider() {

    // アクセストークン
    const [accessToken, setAccessToken] = useState(``);

    useEffect(() => {
        registerAccessTokenSetter(setAccessToken);
    }, []);

    return {
        accessToken,
        setAccessToken,
    }
}