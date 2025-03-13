import { useAtom, useAtomValue } from "jotai";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import { VideoDetailResponseType } from "../Type/VideoDetailResponseType";
import { videoDetailItemAtom, videoIdAtom } from "../Atom/FavoriteAtom";
import { FavoriteVideoDetailApiUrlModel, } from "../Model/FavoriteVideoDetailApiUrlModel";
import { useNavigate } from "react-router-dom";
import { FAVORITE_ROOT_PATH } from "../Const/FavoriteConst";
import { errResType } from "../../Common/Hook/useMutationWrapperBase";

export function useFavoriteVideoDetail() {

    // 動画ID
    const videoId = useAtomValue(videoIdAtom);
    // 動画詳細
    const [videoDetail, setVideoDetail] = useAtom(videoDetailItemAtom);

    // 動画詳細を取得
    const { isLoading } = useQueryWrapper<VideoDetailResponseType>(
        {
            url: videoId ? `${new FavoriteVideoDetailApiUrlModel(videoId).videoMngApiPath}` : ``,
            afSuccessFn: (response: VideoDetailResponseType) => {
                const item = response.item;
                setVideoDetail(item);
            },
            afErrorFn: (res) => {
                const errRes = res as errResType;
                alert(errRes.response.data.message);
            }
        }
    );

    return {
        isLoading,
        videoDetail,
        videoId,
    };
}