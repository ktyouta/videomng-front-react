import { useParams } from "react-router-dom";

export function useChannelId() {

    // チャンネルID
    const { channelId } = useParams<{ channelId: string }>();

    if (!channelId) {
        throw Error(`チャンネルIDが存在しません。`);
    }

    return channelId;
}