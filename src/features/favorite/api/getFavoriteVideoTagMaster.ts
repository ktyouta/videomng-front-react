import { useQuery } from "react-query";
import { VIDEO_MNG_PATH } from "../../../consts/CommonConst";
import ENV from "../../../env.json";
import { api } from "../../../lib/apiClient";
import { FavoriteVideoTagResponseType } from "../types/videodetail/videotag/FavoriteVideoTagResponseType";
import { favoriteVideoKeys } from "./queryKey";

type PropsType<T> = {
    select: (res: FavoriteVideoTagResponseType) => T[];
    onSuccess?: (res: T[]) => void;
    enabled?: boolean;
}

export function getFavoriteVideoTagMaster<T>(props: PropsType<T>) {

    return useQuery({
        queryKey: favoriteVideoKeys.tagMasters(),
        queryFn: async () => {
            const { data } = await api.get(`${VIDEO_MNG_PATH}${ENV.TAG_INFO}`);
            return data;
        },
        select: props.select,
        onSuccess: props.onSuccess,
        enabled: props.enabled,
    });
}