import { SEARCH_CONDITION } from "../const/HomeConst";

type videoListKeyType = { [k in (typeof SEARCH_CONDITION)[keyof typeof SEARCH_CONDITION]]: string } & { nextPageToken: string };

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

export const videoKeys = {
    all: [`video`] as const,
    lists: () => [...videoKeys.all, `list`] as const,
    list: (props: videoListKeyType) => [...videoKeys.lists(), props] as const,
    details: () => [...videoKeys.all, `detail`] as const,
    detail: (videoId: string) => [...videoKeys.details(), videoId] as const,
    comments: () => [...videoKeys.all, `comment`] as const,
    comment: (props: VideoCommentType) => [...videoKeys.comments(), props] as const,
    searchComments: () => [...videoKeys.all, `searchcommentbykeyword`] as const,
    searchComment: (props: VideoSearchCommentType) => [...videoKeys.searchComments(), props] as const,
    channels: () => [...videoKeys.all, `channel`] as const,
    channel: (props: ChannelVideoType) => [...videoKeys.channels(), props] as const,
}