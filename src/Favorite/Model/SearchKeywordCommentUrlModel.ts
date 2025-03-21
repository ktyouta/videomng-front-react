import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";

export class SearchKeywordCommentUrlModel {

    // 動画一覧取得エンドポイント
    private static readonly VIDEO_INFO_PATH = `${VIDEO_MNG_PATH}${ENV.SEARCH_COMMENT_BY_KEYWORD}`;
    // クエリパラメータのキー(キーワード)
    private static readonly QUERY_KEY_KEYWORD = `q`;
    // クエリパラメータのキー(動画ID)
    private static readonly QUERY_KEY_VIDEOID = `videoId`;
    // 動画一覧取得パス
    private readonly _path: string;

    constructor(keyword: string, videoTypeSelectValue: string) {

        const queryParam = `${SearchKeywordCommentUrlModel.QUERY_KEY_KEYWORD}=${keyword}&${SearchKeywordCommentUrlModel.QUERY_KEY_VIDEOID}=${videoTypeSelectValue}`;
        this._path = `${SearchKeywordCommentUrlModel.VIDEO_INFO_PATH}?${queryParam}`;
    }

    get path() {
        return this._path;
    }
}