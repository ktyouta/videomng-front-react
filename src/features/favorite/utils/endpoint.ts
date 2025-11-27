import { VIDEO_MNG_PATH } from "../../../consts/CommonConst";
import ENV from "../../../env.json";

export function getFavoriteVideoFolderEndpoint(folderId: string) {

    const endpoint = folderId ? `${VIDEO_MNG_PATH}${ENV.FAVORITE_VIDEO_FOLDER}`.replace(`:folderId`, folderId) : ``;
    return endpoint;
}

export function folderIdEndpoint(folderId: string) {

    const endpoint = folderId ? `${VIDEO_MNG_PATH}${ENV.FOLDER_ID}`.replace(`:folderId`, folderId) : ``;
    return endpoint;
}

export function favoriteVideoFolderId(props: {
    videoId: string,
    folderId: string,
}) {

    const endpoint = props.videoId && props.folderId ? `${VIDEO_MNG_PATH}${ENV.FAVORITE_VIDEO_FOLDER_ID}`.replace(`:videoId`, props.videoId).replace(`:folderId`, props.folderId) : ``;

    return endpoint;
}