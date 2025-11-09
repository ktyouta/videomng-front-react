import { comboType } from "../../../components/ComboComponent";
import { VIDEO_MNG_PATH } from "../../../consts/CommonConst";
import useQueryWrapper from "../../../hooks/useQueryWrapper";
import { FavoriteVideoSortListResponseType } from "../../favorite/types/videolist/FavoriteVideoSortListResponseType";
import { FavoriteVideoSortType } from "../../favorite/types/videolist/FavoriteVideoSortType";
import ENV from "../../../env.json";

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