export let accessTokenRef: string | null = null;

export const updateAccessToken = (token: string) => {
    accessTokenRef = token;
};