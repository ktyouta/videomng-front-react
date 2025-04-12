import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";

type porpsType = {
    viewStatus?: string,
    videoCategory?: string,
}

export class FavoriteVideoListApiUrlModel {

    // 動画一覧取得エンドポイント
    private static readonly VIDEO_INFO_PATH = `${VIDEO_MNG_PATH}${ENV.FAVORITE_VIDEO}`;
    // クエリパラメータのキー(視聴状況)
    private static readonly QUERY_KEY_VIEW_STATUS = `viewstatus`;
    // クエリパラメータのキー(カテゴリ)
    private static readonly QUERY_KEY_CATEGORY = `videocategory`;
    // 動画一覧取得パス
    private readonly _apiPath: string;

    constructor(props: porpsType) {

        let queryParam = ``;

        if (props.viewStatus) {
            queryParam += `${FavoriteVideoListApiUrlModel.QUERY_KEY_VIEW_STATUS}=${props.viewStatus}`;
        }

        if (props.videoCategory) {
            queryParam += `${FavoriteVideoListApiUrlModel.QUERY_KEY_CATEGORY}=${props.videoCategory}`;
        }

        this._apiPath = `${FavoriteVideoListApiUrlModel.VIDEO_INFO_PATH}${queryParam ? `?${queryParam}` : ``}`;
    }

    get apiPath() {
        return this._apiPath;
    }
}