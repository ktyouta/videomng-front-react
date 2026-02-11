import { getSortList } from "../../api/getSortList";
import { FavoriteVideoSortListResponseType } from "../../favorite/types/videolist/FavoriteVideoSortListResponseType";
import { FavoriteVideoSortType } from "../../favorite/types/videolist/FavoriteVideoSortType";

type porpsType = {
    isGetChache: boolean,
}

export function useSortList(props: porpsType) {

    return getSortList({
        select: (res: FavoriteVideoSortListResponseType) => {

            return res.data.map((e: FavoriteVideoSortType) => {
                return {
                    label: e.label,
                    value: e.id,
                }
            });
        },
        enabled: !props.isGetChache,
    });
}