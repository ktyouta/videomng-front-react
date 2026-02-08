import { VideoListDataType } from "../../../../types/videolist/VideoListDataType"

export type VideoListResponseType = {
    status: number,
    message: string,
    data: VideoListDataType,
}