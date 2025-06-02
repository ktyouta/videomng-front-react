import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";


type porpsType = {
    keyword: string,
    videoType: string,
    nextPageToken?: string,
    videoCategory: string,
}

export class ChannelVideoListApiUrlModel {

    // チャンネル動画取得エンドポイント
    private static readonly VIDEO_INFO_PATH = `${VIDEO_MNG_PATH}${ENV.CHANNEL_VIDEO_INFO}`;
    // クエリパラメータのキー(次データ取得用)
    private static readonly QUERY_KEY_NEXT_PAGE_TOKEN = `nextpagetoken`;
    // チャンネル動画取得URL
    private readonly _url: string;
    // クエリパラメータ
    private readonly _query: string;

    private constructor(queryParam: string) {

        this._query = queryParam;
        this._url = `${ChannelVideoListApiUrlModel.VIDEO_INFO_PATH}${queryParam}`;
    }

    /**
     * APIの呼び出しURLを作成
     * @param props 
     * @returns 
     */
    static create(props: porpsType) {

        let queryParam = ``;

        if (props.nextPageToken) {
            queryParam += `?${ChannelVideoListApiUrlModel.QUERY_KEY_NEXT_PAGE_TOKEN}=${props.nextPageToken}`;
        }

        return new ChannelVideoListApiUrlModel(queryParam);
    }

    /**
     * APIの呼び出しURLを設定
     * @param query 
     */
    static reConstruct(query: string) {

        if (!query) {
            throw Error(`チャンネル動画取得URLのクエリパラメータが存在しません。`);
        }

        if (query.length === 0) {
            throw Error(`チャンネル動画取得URLのクエリパラメータが存在しません。`);
        }

        if (query.charAt(0) !== `?`) {
            throw Error(`チャンネル動画取得URLのクエリパラメータの形式が不正です。`);
        }

        return new ChannelVideoListApiUrlModel(query);
    }

    get url() {
        return this._url;
    }

    get query() {
        return this._query;
    }
}