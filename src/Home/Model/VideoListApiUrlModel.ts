import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";

export class VideoListApiUrlModel {

    // 動画一覧取得エンドポイント
    private static readonly VIDEO_INFO_PATH = `${VIDEO_MNG_PATH}${ENV.VIDEO_INFO}`;
    // クエリパラメータのキー(キーワード)
    private static readonly QUERY_KEY_KEYWORD = `q`;
    // クエリパラメータのキー(動画種別)
    private static readonly QUERY_KEY_TYPE = `videotype`;
    // クエリパラメータのキー(次データ取得用)
    private static readonly QUERY_KEY_NEXT_PAGE_TOKEN = `nextpagetoken`;
    // 動画一覧取得パス
    private readonly _videoMngApiPath: string;

    constructor(keyword: string,
        videoTypeSelectValue: string,
        nextPageToken: string = ``) {

        let queryParam = `${VideoListApiUrlModel.QUERY_KEY_KEYWORD}=${keyword}&${VideoListApiUrlModel.QUERY_KEY_TYPE}=${videoTypeSelectValue}`

        if (nextPageToken) {
            queryParam += `&${VideoListApiUrlModel.QUERY_KEY_NEXT_PAGE_TOKEN}=${nextPageToken}`;
        }

        this._videoMngApiPath = `${VideoListApiUrlModel.VIDEO_INFO_PATH}?${queryParam}`;
    }

    get videoMngApiPath() {
        return this._videoMngApiPath;
    }
}