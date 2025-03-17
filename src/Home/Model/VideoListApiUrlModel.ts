import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";

export class VideoListApiUrlModel {

    // 動画一覧取得エンドポイント
    private static readonly VIDEO_INFO_PATH = `${VIDEO_MNG_PATH}${ENV.VIDEO_INFO}`;
    // クエリパラメータのキー(キーワード)
    private static readonly QUERY_KEY_KEYWORD = `q`;
    // クエリパラメータのキー(動画種別)
    private static readonly QUERY_KEY_TYPE = `videotype`;
    // 動画一覧取得パス
    private readonly _videoMngApiPath: string;

    constructor(keyword: string, videoTypeSelectValue: string) {

        this._videoMngApiPath = `${VideoListApiUrlModel.VIDEO_INFO_PATH}?${VideoListApiUrlModel.QUERY_KEY_KEYWORD}=${keyword}&${VideoListApiUrlModel.QUERY_KEY_TYPE}=${videoTypeSelectValue}`;
    }

    get videoMngApiPath() {
        return this._videoMngApiPath;
    }
}