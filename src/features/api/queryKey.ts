type VideoCommentType = {
    videoId: string;
    nextPageToken: string;
}

type VideoSearchCommentType = {
    videoId: string;
    keyword: string;
}

export const videoKeys = {
    all: [`video`] as const,
    details: () => [...videoKeys.all, `detail`] as const,
    detail: (videoId: string) => [...videoKeys.details(), videoId] as const,
    comments: () => [...videoKeys.all, `comment`] as const,
    comment: (props: VideoCommentType) => [...videoKeys.comments(), props] as const,
    searchComments: () => [...videoKeys.all, `searchcommentbykeyword`] as const,
    searchComment: (props: VideoSearchCommentType) => [...videoKeys.searchComments(), props] as const,
}

export const appKeys = {
    all: [`app`] as const,
    authCheck: () => [...appKeys.all, `authCheck`] as const,
}

export const masterKeys = {
    all: [`master`] as const,
    videoCategory: () => [...masterKeys.all, `videoCategory`] as const,
    sortList: () => [...masterKeys.all, `sortList`] as const,
}