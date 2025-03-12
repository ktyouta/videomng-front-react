import { useAtom, useAtomValue } from "jotai";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import { VideoDetailResponseType } from "../Type/VideoDetailResponseType";
import { videoDetailItemAtom, videoIdAtom } from "../Atom/FavoriteAtom";
import { VideoDetailApiUrlModel } from "../Model/VideoDetailApiUrlModel";
import { useNavigate } from "react-router-dom";
import { FAVORITE_ROOT_PATH } from "../Const/FavoriteConst";
import { errResType } from "../../Common/Hook/useMutationWrapperBase";

export function useFavoriteVideoDetail() {

    // 動画ID
    const videoId = useAtomValue(videoIdAtom);
    // 動画詳細
    const [videoDetail, setVideoDetail] = useAtom(videoDetailItemAtom);
    //ルーティング用
    const navigate = useNavigate();

    // 動画詳細を取得
    const { isLoading } = useQueryWrapper<VideoDetailResponseType>(
        {
            url: videoId ? `${new VideoDetailApiUrlModel(videoId).videoMngApiPath}` : ``,
            afSuccessFn: (response: VideoDetailResponseType) => {
                const items = response.data.items;

                if (items.length === 0) {
                    alert(`動画情報を取得できませんでした。`);
                    navigate(FAVORITE_ROOT_PATH);
                    return;
                }

                setVideoDetail(items[0]);
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