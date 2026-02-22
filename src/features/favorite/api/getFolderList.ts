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
    parentFolderId?: string;
}

export function getFolderList(props: PropsType) {

    const query = props.parentFolderId ? `?parentFolderId=${props.parentFolderId}` : ``;

    return useQuery({
        queryKey: favoriteVideoKeys.folderList({
            parentFolderId: props.parentFolderId
        }),
        queryFn: async () => {
            const { data } = await api.get(`${VIDEO_MNG_PATH}${ENV.FOLDER}${query}`);
            return data;
        },
        select: props.select,
        onError: props.onError,
    });
}