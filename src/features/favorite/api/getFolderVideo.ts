import { useQuery } from "react-query";
import { api } from "../../../lib/apiClient";
import { useCreateFavoriteVideoFolderVideoListQuery } from "../hooks/videofolder/useCreateFavoriteVideoFolderVideoListQuery";
import { FolderVideoSearchConditionType } from "../types/videofolder/FolderVideoSearchConditionType";
import { FavoriteVideoListResponseDataType } from "../types/videolist/FavoriteVideoListResponseDataType";
import { FavoriteVideoListResponseType } from "../types/videolist/FavoriteVideoListResponseType";
import { favoriteVideoFolderVideoListEndpoint } from "../utils/endpoint";
import { favoriteVideoKeys } from "./queryKey";

type PropsType = {
    folderId: string;
    searchConditionObj: FolderVideoSearchConditionType;
    select: (res: FavoriteVideoListResponseType) => FavoriteVideoListResponseDataType;
    onSuccess?: (res: FavoriteVideoListResponseDataType) => void;
    onError?: (res: unknown) => void;
    enabled?: boolean;
}

export function getFolderVideo(props: PropsType) {

    const { query } = useCreateFavoriteVideoFolderVideoListQuery(props.searchConditionObj);

    return useQuery({
        queryKey: favoriteVideoKeys.folderVideo({
            folderId: props.folderId,
            searchConditionObj: props.searchConditionObj,
        }),
        queryFn: async () => {
            const { data } = await api.get(favoriteVideoFolderVideoListEndpoint({
                folderId: props.folderId,
                query
            }));
            return data;
        },
        select: props.select,
        onSuccess: props.onSuccess,
        onError: props.onError,
        enabled: !!props.folderId && (props.enabled ?? true),
    });
}