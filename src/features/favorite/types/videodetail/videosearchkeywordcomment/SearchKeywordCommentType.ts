
export type SearchKeywordCommentType = {

    // 元のコメント本文
    readonly textOriginal: string;
    // コメントの投稿日時
    readonly publishedAt: string;
    // コメント投稿者の表示名
    readonly authorDisplayName: string;
    // コメントID
    readonly commentId: string;
    // お気に入りステータス
    readonly favoriteStatus: string;
    // コメント投稿者のプロフィール画像URL
    readonly authorProfileImageUrl: string;
}