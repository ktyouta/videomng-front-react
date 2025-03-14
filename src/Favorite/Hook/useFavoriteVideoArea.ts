import { useAtom, useAtomValue } from "jotai";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import { FavoriteVideoListResponseType } from "../Type/FavoriteVideoListResponseType";
import { favoriteVideoListAtom } from "../Atom/FavoriteAtom";
import { errResType } from "../../Common/Hook/useMutationWrapperBase";
import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json"


export function useFavoriteVideoArea() {

    // 動画リスト
    const [videoListItem, setVideoListItemAtom] = useAtom(favoriteVideoListAtom);


    // 動画一覧を取得
    const { isLoading } = useQueryWrapper<FavoriteVideoListResponseType>(
        {
            url: `${VIDEO_MNG_PATH}${ENV.FAVORITE_VIDEO}`,
            afSuccessFn: (response: FavoriteVideoListResponseType) => {
                setVideoListItemAtom(response.data);
            },
            afErrorFn: (res) => {
                const errRes = res as errResType;
                alert(errRes.response.data.message);
            }
        }
    );

    return {
        videoListItem,
        isLoading,
    }
}