import { ReactNode } from 'react';
import { createCtx } from '../../utils/createCtx';
import { useTokenProvider } from '../hooks/useTokenProvider';

// アクセストークン
export const AccessTokenContext = createCtx<string>();
// アクセストークン(setter)
export const SetAccessTokenContext = createCtx<React.Dispatch<React.SetStateAction<string>>>();

type propsType = {
    children: ReactNode;
}

export function TokenProvider(props: propsType) {

    console.log("TokenProvider render");

    const {
        accessToken,
        setAccessToken, } = useTokenProvider();

    return (
        <AccessTokenContext.Provider value={accessToken}>
            <SetAccessTokenContext.Provider value={setAccessToken}>
                {props.children}
            </SetAccessTokenContext.Provider>
        </AccessTokenContext.Provider>
    )
}