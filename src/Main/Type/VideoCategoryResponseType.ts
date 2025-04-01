import { VideoCategoryDataType } from "./VideoCategoryDataType";

export type VideoCategoryResponseType = {
    status: number,
    message: string,
    data: VideoCategoryDataType,
}