import { SEARCH_CONDITION } from "../const/HomeConst";

type videoListKeyType = { [k in (typeof SEARCH_CONDITION)[keyof typeof SEARCH_CONDITION]]: string } & { nextPageToken: string };

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
    channels: () => [...videoKeys.all, `channel`] as const,
    channel: (props: ChannelVideoType) => [...videoKeys.channels(), props] as const,
}