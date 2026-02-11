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