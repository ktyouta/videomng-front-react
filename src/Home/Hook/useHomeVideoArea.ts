import { useAtom, useAtomValue } from "jotai";
import useQueryWrapper, { ErrResType } from "../../Common/Hook/useQueryWrapper";
import { VideoListResponseType } from "../Type/VideoListResponseType";
import { videoApiUrlAtom, videoListItemAtom } from "../Atom/HomeAtom";

export function useHomeVideoArea() {

    // 動画取得用URL
    const videoApiUrl = useAtomValue(videoApiUrlAtom);
    // 動画リスト
    const [videoListItem, setVideoListItemAtom] = useAtom(videoListItemAtom);

    const { isLoading } = useQueryWrapper<VideoListResponseType>(
        {
            url: videoApiUrl,
            afSuccessFn: (response: VideoListResponseType) => {
                setVideoListItemAtom(response.data.items);
            },
            afErrorFn: (res) => {
                const errRes = res as ErrResType;
            }
        }
    );

    return {
        videoListItem,
        isLoading,
    }
}