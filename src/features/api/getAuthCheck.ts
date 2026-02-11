import { useQuery } from "react-query";
import { VIDEO_MNG_PATH } from "../../consts/CommonConst";
import ENV from "../../env.json";
import { api } from "../../lib/apiClient";
import { appKeys } from "./queryKey";

type PropsType = {
    onSuccess: (res: unknown) => void;
    onError: (res: unknown) => void;
}

export function getAuthCheck(props: PropsType) {

    return useQuery({
        queryKey: appKeys.authCheck(),
        queryFn: async () => {
            const { data } = await api.get(`${VIDEO_MNG_PATH}${ENV.FRONT_USER_CHECK_AUTH}`);
            return data;
        },
        onSuccess: props.onSuccess,
        onError: props.onError,
    });
}
