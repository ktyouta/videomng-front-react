import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";


type porpsType = {
    keyword: string,
    videoType: string,
    nextPageToken?: string,
    videoCategory: string,
}

export class VideoListApiUrlModel {

    // 動画一覧取得エンドポイント
    private static readonly VIDEO_INFO_PATH = `${VIDEO_MNG_PATH}${ENV.VIDEO_INFO}`;
    // クエリパラメータのキー(キーワード)
    private static readonly QUERY_KEY_KEYWORD = `q`;
    // クエリパラメータのキー(動画種別)
    private static readonly QUERY_KEY_TYPE = `videotype`;
    // クエリパラメータのキー(次データ取得用)
    private static readonly QUERY_KEY_NEXT_PAGE_TOKEN = `nextpagetoken`;
    // クエリパラメータのキー(カテゴリ)
    private static readonly QUERY_KEY_VIDEO_CATEOGRY = `videocategory`;
    // 動画一覧取得パス
    private readonly _videoMngApiPath: string;

    constructor(props: porpsType) {

        let queryParam = `${VideoListApiUrlModel.QUERY_KEY_KEYWORD}=${props.keyword}`;

        if (props.videoType) {
            queryParam += `&${VideoListApiUrlModel.QUERY_KEY_TYPE}=${props.videoType}`;
        }

        if (props.nextPageToken) {
            queryParam += `&${VideoListApiUrlModel.QUERY_KEY_NEXT_PAGE_TOKEN}=${props.nextPageToken}`;
        }

        if (props.videoCategory) {
            queryParam += `&${VideoListApiUrlModel.QUERY_KEY_VIDEO_CATEOGRY}=${props.videoCategory}`;
        }

        this._videoMngApiPath = `${VideoListApiUrlModel.VIDEO_INFO_PATH}?${queryParam}`;
    }

    get videoMngApiPath() {
        return this._videoMngApiPath;
    }
}