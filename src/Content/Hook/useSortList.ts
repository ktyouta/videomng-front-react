import { comboType } from "../../Common/Component/ComboComponent";
import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import { FavoriteVideoSortListResponseType } from "../../Favorite/Type/VideoList/FavoriteVideoSortListResponseType";
import { FavoriteVideoSortType } from "../../Favorite/Type/VideoList/FavoriteVideoSortType";
import ENV from "../../env.json";

type porpsType = {
    isGetChache: boolean,
}

export function useSortList(props: porpsType) {

    return useQueryWrapper<FavoriteVideoSortListResponseType, comboType[]>(
        {
            url: `${VIDEO_MNG_PATH}${ENV.FAVORITE_VIDEO_SORT}`,
            select: (res: FavoriteVideoSortListResponseType) => {

                return res.data.map((e: FavoriteVideoSortType) => {
                    return {
                        label: e.label,
                        value: e.id,
                    }
                });
            },
            afErrorFn: (res) => {
            },
            options: {
                enabled: !props.isGetChache
            }
        }
    );
}