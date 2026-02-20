import { useQuery } from "react-query";
import { api } from "../../../lib/apiClient";
import { FolderMasterType } from "../types/videolist/FolderMasterType";
import { FolderResponseType } from "../types/videolist/FolderResponseType";
import { folderIdEndpoint } from "../utils/endpoint";
import { favoriteVideoKeys } from "./queryKey";

type PropsType = {
    folderId: string;
    select: (res: FolderResponseType) => FolderMasterType[];
    onError: (res: unknown) => void;
}

export function getFolder(props: PropsType) {

    return useQuery({
        queryKey: favoriteVideoKeys.folder(props.folderId),
        queryFn: async () => {
            const { data } = await api.get(folderIdEndpoint(props.folderId));
            return data;
        },
        select: props.select,
        enabled: !!props.folderId,
    });
}