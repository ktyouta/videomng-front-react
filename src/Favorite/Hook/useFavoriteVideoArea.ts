import { useAtom, useAtomValue } from "jotai";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import { VideoListResponseType } from "../Type/VideoListResponseType";
import { videoApiUrlAtom, videoListItemAtom } from "../Atom/FavoriteAtom";
import { errResType } from "../../Common/Hook/useMutationWrapperBase";
import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json"


export function useFavoriteVideoArea() {

    // 動画取得用URL
    const [videoApiUrl, setVideoApiUrl] = useAtom(videoApiUrlAtom);
    // 動画リスト
    const [videoListItem, setVideoListItemAtom] = useAtom(videoListItemAtom);


    // 動画一覧を取得
    const { isLoading } = useQueryWrapper<VideoListResponseType>(
        {
            url: `${VIDEO_MNG_PATH}${ENV.FAVORITE_VIDEO}`,
            afSuccessFn: (response: VideoListResponseType) => {
                setVideoListItemAtom(response.data.items);
            },
            afErrorFn: (res) => {
                const errRes = res as errResType;
                alert(errRes.response.data.message);
                setVideoApiUrl(``);
            }
        }
    );

    return {
        videoListItem,
        isLoading,
    }
}