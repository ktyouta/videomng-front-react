import { useQuery } from "react-query";
import { Option } from "../../../components/Selectbox";
import { VIDEO_MNG_PATH } from "../../../consts/CommonConst";
import ENV from "../../../env.json";
import { api } from "../../../lib/apiClient";
import { ViewStatusResponseType } from "../types/videolist/ViewStatusResponseType";
import { favoriteVideoKeys } from "./queryKey";

type PropsType = {
    select: (res: ViewStatusResponseType) => Option[];
    onError?: (res: unknown) => void;
}

export function getViewStatusList(props: PropsType) {

    return useQuery({
        queryKey: favoriteVideoKeys.viewStatuses(),
        queryFn: async () => {
            const { data } = await api.get(`${VIDEO_MNG_PATH}${ENV.VIEW_STATUS}`);
            return data;
        },
        select: props.select,
        onError: props.onError,
        // 初回に読み込んだ視聴状況を使いまわす
        staleTime: Infinity,
    });
}
