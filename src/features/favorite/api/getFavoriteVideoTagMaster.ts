import { useQuery } from "react-query";
import { Option } from "../../../components/Selectbox";
import { VIDEO_MNG_PATH } from "../../../consts/CommonConst";
import ENV from "../../../env.json";
import { api } from "../../../lib/apiClient";
import { FavoriteVideoTagResponseType } from "../types/videodetail/videotag/FavoriteVideoTagResponseType";
import { favoriteVideoKeys } from "./queryKey";

type PropsType = {
    select: (res: FavoriteVideoTagResponseType) => (Option & { tagColor: string })[];
    onSuccess?: (res: (Option & { tagColor: string })[]) => void;
    enabled?: boolean;
}

export function getFavoriteVideoTagMaster(props: PropsType) {

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