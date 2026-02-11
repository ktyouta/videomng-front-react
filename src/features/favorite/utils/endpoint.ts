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

export function folderShareVideosEndpoint(folderId: string) {
    const endpoint = folderId ? `${VIDEO_MNG_PATH}${ENV.FOLDER_SHARE_VIDEOS}`.replace(`:folderId`, folderId) : ``;
    return endpoint;
}

export function favoriteMemoEndpoint(videoId: string) {
    const endpoint = videoId ? `${VIDEO_MNG_PATH}${ENV.FAVORITE_VIDEO_MEMO}`.replace(`:videoId`, videoId) : ``;
    return endpoint;
}

export function favoriteMemoIdEndpoint(props: {
    videoId: string,
    memoId: number,
}) {
    const endpoint = props.videoId && props.memoId ? `${VIDEO_MNG_PATH}${ENV.FAVORITE_VIDEO_MEMO_ID}`.replace(`:videoId`, props.videoId).replace(`:memoId`, props.memoId.toString()) : ``;
    return endpoint;
}

export function favoriteCommentIdEndpoint(props: {
    videoId: string,
    commentId: string,
}) {
    const endpoint = props.videoId && props.commentId ? `${VIDEO_MNG_PATH}${ENV.FAVORITE_COMMENT_ID}`.replace(`:videoId`, props.videoId).replace(`:commentId`, props.commentId) : ``;
    return endpoint;
}

export function favoriteTagEndpoint(videoId: string) {
    const endpoint = videoId ? `${VIDEO_MNG_PATH}${ENV.FAVORITE_VIDEO_TAG}`.replace(`:videoId`, videoId) : ``;
    return endpoint;
}

export function favoriteVideoFolderVideoListEndpoint(props: { folderId: string, query: string }) {
    const endpoint = props.folderId ? `${VIDEO_MNG_PATH}${ENV.FAVORITE_VIDEO_FOLDER}${props.query}`.replace(`:folderId`, props.folderId) : ``;
    return endpoint;
}

export function favoriteBlockCommentEndpoint(videoId: string) {
    const endpoint = videoId ? `${VIDEO_MNG_PATH}${ENV.BLOCK_COMMENT}`.replace(`:videoId`, videoId) : ``;
    return endpoint;
}

export function favoriteFavoriteCommentEndpoint(videoId: string) {
    const endpoint = videoId ? `${VIDEO_MNG_PATH}${ENV.FAVORITE_COMMENT}`.replace(`:videoId`, videoId) : ``;
    return endpoint;
}