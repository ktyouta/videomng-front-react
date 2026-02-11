import { useQuery } from "react-query";
import { Option } from "../../../components/Selectbox";
import { VIDEO_MNG_PATH } from "../../../consts/CommonConst";
import ENV from "../../../env.json";
import { api } from "../../../lib/apiClient";
import { FolderResponseType } from "../types/videolist/searcharea/filter/FolderResponseType";
import { favoriteVideoKeys } from "./queryKey";

type PropsType = {
    select: (res: FolderResponseType) => Option[];
    onError?: (res: unknown) => void;
}

export function getFolderList(props: PropsType) {

    return useQuery({
        queryKey: favoriteVideoKeys.folders(),
        queryFn: async () => {
            const { data } = await api.get(`${VIDEO_MNG_PATH}${ENV.FOLDER}`);
            return data;
        },
        select: props.select,
        onError: props.onError,
    });
}