import { useQuery } from "react-query";
import { Option } from "../../components/Selectbox";
import { VIDEO_MNG_PATH } from "../../consts/CommonConst";
import ENV from "../../env.json";
import { api } from "../../lib/apiClient";
import { VideoCategoryResponseType } from "../main/types/VideoCategoryResponseType";
import { masterKeys } from "./queryKey";

type PropsType = {
    select: (res: VideoCategoryResponseType) => Option[];
    onError?: (res: unknown) => void;
}

export function getVideoCategory(props: PropsType) {

    return useQuery({
        queryKey: masterKeys.videoCategory(),
        queryFn: async () => {
            const { data } = await api.get(`${VIDEO_MNG_PATH}${ENV.VIDEO_CATEGORY}`);
            return data;
        },
        select: props.select,
        onError: props.onError,
        // 初回に読み込んだカテゴリを使いまわす
        staleTime: Infinity,
    });
}
