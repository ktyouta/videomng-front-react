import { useQuery } from "react-query";
import { api } from "../../../lib/apiClient";
import { FolderShareVideosResponseDataType } from "../types/videofolder/searcharea/deletefolder/FolderShareVideosResponseDataType";
import { FolderShareVideosResponseType } from "../types/videofolder/searcharea/deletefolder/FolderShareVideosResponseType";
import { folderShareVideosEndpoint } from "../utils/endpoint";
import { favoriteVideoKeys } from "./queryKey";

type PropsType = {
    folderId: string;
    select: (res: FolderShareVideosResponseType) => FolderShareVideosResponseDataType[];
    onError: (res: unknown) => void;
}

export function getSharedVideos(props: PropsType) {

    return useQuery({
        queryKey: favoriteVideoKeys.sharedVideo(props.folderId),
        queryFn: async () => {
            const { data } = await api.get(folderShareVideosEndpoint(props.folderId));
            return data;
        },
        select: props.select,
        enabled: !!props.folderId,
    });
}