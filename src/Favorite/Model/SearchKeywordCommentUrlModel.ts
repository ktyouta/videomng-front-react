import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";

export class SearchKeywordCommentUrlModel {

    // 動画一覧取得エンドポイント
    private static readonly VIDEO_INFO_PATH = `${VIDEO_MNG_PATH}${ENV.SEARCH_COMMENT_BY_KEYWORD}`;
    // クエリパラメータのキー(キーワード)
    private static readonly QUERY_KEY_KEYWORD = `q`;
    // 動画一覧取得パス
    private readonly _path: string;

    constructor(keyword: string, videoId: string) {

        const queryParam = `${SearchKeywordCommentUrlModel.QUERY_KEY_KEYWORD}=${keyword}`;
        this._path = `${SearchKeywordCommentUrlModel.VIDEO_INFO_PATH.replace(`:videoId`, videoId)}?${queryParam}`;
    }

    get path() {
        return this._path;
    }
}