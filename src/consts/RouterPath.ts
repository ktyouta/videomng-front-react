// ルーティングパスリスト
export const ROUTER_PATH = {
    // ホーム画面パス
    HOME: {
        ROOT: `/video`,
        DETAIL: `/detail`,
        CHANNEL: `/channel`,
    },
    // お気に入り画面ルートパス
    FAVORITE: {
        ROOT: `/favorite`,
        DETAIL: `/detail`,
        FOLDER: `/folder`,
        CHANNEL: `/channel`,
        DETAIL_NON_FAVORITE: `/detail/non-favorite`,
    },
    // ログイン
    LOGIN: `/login`,
    // アカウント作成
    SIGNUP: `/signup`,
    // ユーザー情報更新
    UPDATE_USER_INFO: `/updateuserinfo`,
    // ユーザーパスワード更新
    UPDATE_USER_PASSWORD: `/updateuserpassword`,
}