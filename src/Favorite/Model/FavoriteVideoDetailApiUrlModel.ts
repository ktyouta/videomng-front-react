import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";

export class FavoriteVideoDetailApiUrlModel {

    // 動画詳細取得エンドポイント
    private static readonly VIDEO_INFO_PATH = `${VIDEO_MNG_PATH}${ENV.FAVORITE_VIDEO}`;
    // 動画詳細取得パス
    private readonly _videoMngApiPath: string;

    constructor(videId: string,) {

        this._videoMngApiPath = `${FavoriteVideoDetailApiUrlModel.VIDEO_INFO_PATH}/${videId}`;
    }

    get videoMngApiPath() {
        return this._videoMngApiPath;
    }
}