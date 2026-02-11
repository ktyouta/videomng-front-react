import { FolderVideoSearchConditionType } from "../types/videofolder/FolderVideoSearchConditionType";
import { VideoSearchConditionType } from "../types/videolist/VideoSearchConditionType";

type VideoCommentType = {
    videoId: string;
    nextPageToken: string;
}

type VideoSearchCommentType = {
    videoId: string;
    keyword: string;
}

type ChannelVideoType = {
    channelId: string;
    nextPageToken: string;
}

/**
 * 動画一覧取得用のキー作成
 * @param props 
 * @returns 
 */
function createVideoListKey(props: VideoSearchConditionType) {
    return {
        selectedFavoriteVideoCategory: props.selectedFavoriteVideoCategory,
        selectedFavoriteVideoViewStatus: props.selectedFavoriteVideoViewStatus,
        selectedFavoriteVideoTag: props.selectedFavoriteVideoTag,
        selectedFavoriteVideoFavoriteLevel: props.selectedFavoriteVideoFavoriteLevel,
        selectedFavoriteVideoSortKey: props.selectedFavoriteVideoSortKey,
        selectedFavoriteVideoPage: props.selectedFavoriteVideoPage,
        selectedFavoriteVideoFolder: props.selectedFavoriteVideoFolder,
        selectedFavoriteVideoMode: props.selectedFavoriteVideoMode,
    };
}

/**
 * フォルダ内動画一覧取得用のキー作成
 * @param props 
 * @returns 
 */
function createFolderVideoListKey(props: FolderVideoSearchConditionType) {
    return {
        selectedFavoriteVideoCategory: props.selectedFavoriteVideoCategory,
        selectedFavoriteVideoViewStatus: props.selectedFavoriteVideoViewStatus,
        selectedFavoriteVideoTag: props.selectedFavoriteVideoTag,
        selectedFavoriteVideoFavoriteLevel: props.selectedFavoriteVideoFavoriteLevel,
        selectedFavoriteVideoSortKey: props.selectedFavoriteVideoSortKey,
        selectedFavoriteVideoPage: props.selectedFavoriteVideoPage,
    };
}

export const favoriteVideoKeys = {
    all: [`favoriteVideo`] as const,
    lists: () => [...favoriteVideoKeys.all, `list`] as const,
    list: (props: VideoSearchConditionType) => [...favoriteVideoKeys.lists(), createVideoListKey(props)] as const,
    details: () => [...favoriteVideoKeys.all, `detail`] as const,
    detail: (videoId: string) => [...favoriteVideoKeys.details(), videoId] as const,
    comments: () => [...favoriteVideoKeys.all, `comment`] as const,
    comment: (props: VideoCommentType) => [...favoriteVideoKeys.comments(), props] as const,
    favoriteComments: () => [...favoriteVideoKeys.all, `favoriteComment`] as const,
    favoriteComment: (videoId: string) => [...favoriteVideoKeys.favoriteComments(), videoId] as const,
    blockComments: () => [...favoriteVideoKeys.all, `blockComment`] as const,
    blockComment: (videoId: string) => [...favoriteVideoKeys.blockComments(), videoId] as const,
    searchComments: () => [...favoriteVideoKeys.all, `searchcommentbykeyword`] as const,
    searchComment: (props: VideoSearchCommentType) => [...favoriteVideoKeys.searchComments(), props] as const,
    channels: () => [...favoriteVideoKeys.all, `channel`] as const,
    channel: (props: ChannelVideoType) => [...favoriteVideoKeys.channels(), props] as const,
    customs: () => [favoriteVideoKeys.all, `custom`] as const,
    custom: (videoId: string) => [favoriteVideoKeys.customs(), videoId] as const,
    memos: () => [favoriteVideoKeys.all, `memo`] as const,
    memo: (videoId: string) => [favoriteVideoKeys.memos(), videoId] as const,
    tags: () => [favoriteVideoKeys.all, `tag`] as const,
    tag: (videoId: string) => [favoriteVideoKeys.tags(), videoId] as const,
    tagMasters: () => [favoriteVideoKeys.all, `tagMaster`] as const,
    folders: () => [...favoriteVideoKeys.all, `folder`] as const,
    folder: (folderId: string) => [...favoriteVideoKeys.folders(), folderId] as const,
    folderVideos: () => [...favoriteVideoKeys.all, `folderVideo`] as const,
    folderVideo: (props: { folderId: string, searchConditionObj: FolderVideoSearchConditionType }) => [...favoriteVideoKeys.folderVideos(), props.folderId, createFolderVideoListKey(props.searchConditionObj)] as const,
}