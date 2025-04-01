import { VideoCategoryItemType } from "./VideoCategoryItemType";

export type VideoCategoryDataType = {
    // APIレスポンスの種類
    readonly kind: string;
    // APIレスポンスのETag
    readonly etag: string;
    // カテゴリ情報
    readonly items: VideoCategoryItemType[],
}