import { VIDEO_MNG_PATH } from "../../../../../consts/CommonConst";
import ENV from "../../../../../env.json";
import { useCreateFavoriteVideoFolderVideoListQuery } from "../useCreateFavoriteVideoFolderVideoListQuery";


export function useFavoriteVideoListEndpoint(folderId: string) {

    const { query } = useCreateFavoriteVideoFolderVideoListQuery();

    const endpoint = folderId ? `${VIDEO_MNG_PATH}${ENV.FAVORITE_VIDEO_FOLDER}${query}`.replace(`:folderId`, folderId) : ``;

    return endpoint;
}