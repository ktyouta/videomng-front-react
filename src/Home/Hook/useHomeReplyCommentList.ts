import { useState } from "react"

export function useHomeReplyCommentList() {

    // 返信コメント表示フラグ
    const [isDisplayReply, setIsDisplayReply] = useState(false);

    /**
     * 返信コメント表示
     */
    function openReply() {
        setIsDisplayReply(true);
    }

    /**
     * 返信コメント非表示
     */
    function closeReply() {
        setIsDisplayReply(false);
    }

    return {
        isDisplayReply,
        openReply,
        closeReply,
    }
}