import { useAtomValue, useSetAtom } from "jotai";
import { favoriteVideoIdAtom, viewStatusListAtom } from "../Atom/FavoriteAtom";
import { ViewStatusResponseType } from "../Type/ViewStatusResponseType";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";
import { errResType } from "../../Common/Hook/useMutationWrapperBase";


export function useFavorite() {

    // お気に入り動画ID
    const favoriteVideoId = useAtomValue(favoriteVideoIdAtom);
    // 視聴状況リスト
    const setViewStatusList = useSetAtom(viewStatusListAtom);

    // 視聴状況リストを取得
    useQueryWrapper<ViewStatusResponseType>(
        {
            url: `${VIDEO_MNG_PATH}${ENV.VIEW_STATUS}`,
            afSuccessFn: (response: ViewStatusResponseType) => {
                setViewStatusList(response.data.map((e) => {
                    return {
                        value: e.id,
                        label: e.label,
                    }
                }));
            },
            afErrorFn: (res) => {
            }
        }
    );

    return {
        favoriteVideoId
    }
}