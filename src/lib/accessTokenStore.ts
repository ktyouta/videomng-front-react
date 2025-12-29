
let setAccessTokenRef: React.Dispatch<React.SetStateAction<string>> | null = null;

export const registerAccessTokenSetter = (setter: React.Dispatch<React.SetStateAction<string>>) => {
    setAccessTokenRef = setter;
};

export const updateAccessToken = (token: string) => {
    setAccessTokenRef?.(token);
};
