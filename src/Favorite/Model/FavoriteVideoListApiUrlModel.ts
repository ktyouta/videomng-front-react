import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";

type porpsType = {
    viewStatus?: string,
    videoCategory?: string,
    videoTag?: string,
}

export class FavoriteVideoListApiUrlModel {

    // 動画一覧取得エンドポイント
    private static readonly VIDEO_INFO_PATH = `${VIDEO_MNG_PATH}${ENV.FAVORITE_VIDEO}`;
    // クエリパラメータのキー(視聴状況)
    private static readonly QUERY_KEY_VIEW_STATUS = `viewstatus`;
    // クエリパラメータのキー(カテゴリ)
    private static readonly QUERY_KEY_CATEGORY = `videocategory`;
    // クエリパラメータのキー(タグ)
    private static readonly QUERY_KEY_TAG = `videotag`;
    // 動画一覧取得URL
    private readonly _url: string;
    // クエリパラメータ
    private readonly _query: string;

    constructor(props: porpsType) {

        let queryParam = ``;

        if (props.viewStatus) {
            queryParam += `${FavoriteVideoListApiUrlModel.QUERY_KEY_VIEW_STATUS}=${props.viewStatus}`;
        }

        if (props.videoCategory) {
            queryParam += `${FavoriteVideoListApiUrlModel.QUERY_KEY_CATEGORY}=${props.videoCategory}`;
        }

        if (props.videoTag) {
            queryParam += `${FavoriteVideoListApiUrlModel.QUERY_KEY_TAG}=${props.videoTag}`;
        }

        this._url = `${FavoriteVideoListApiUrlModel.VIDEO_INFO_PATH}${queryParam ? `?${queryParam}` : ``}`;
        this._query = `${queryParam ? `?${queryParam}` : ``}`;
    }

    get url() {
        return this._url;
    }

    get query() {
        return this._query;
    }
}