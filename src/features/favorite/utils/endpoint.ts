import { VIDEO_MNG_PATH } from "../../../consts/CommonConst";
import ENV from "../../../env.json";

export function getFavoriteVideoFolderEndpoint(folderId: string) {

    const endpoint = folderId ? `${VIDEO_MNG_PATH}${ENV.FAVORITE_VIDEO_FOLDER}`.replace(`:folderId`, folderId) : ``;

    return endpoint;
}