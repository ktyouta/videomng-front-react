import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";

export class VideoListApiUrlModel {

    // 動画一覧取得エンドポイント
    private static readonly VIDEO_INFO_PATH = `${VIDEO_MNG_PATH}${ENV.VIDEO_INFO}`;
    // クエリパラメータのキー
    private static readonly QUERY_KEY_KEYWORD = `q`;
    // 動画一覧取得パス
    private readonly _videoMngApiPath: string;

    constructor(keyword: string,) {

        this._videoMngApiPath = `${VideoListApiUrlModel.VIDEO_INFO_PATH}?${VideoListApiUrlModel.QUERY_KEY_KEYWORD}=${keyword}`;
    }

    get videoMngApiPath() {
        return this._videoMngApiPath;
    }
}