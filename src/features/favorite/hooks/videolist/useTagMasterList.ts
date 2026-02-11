import { getFavoriteVideoTagMaster } from "../../api/getFavoriteVideoTagMaster";
import { FavoriteVideoTagResponseType } from "../../types/videodetail/videotag/FavoriteVideoTagResponseType";


type porpsType = {
    isGetChache: boolean,
}

export function useTagMasterList(props: porpsType) {

    // タグマスタリストを取得
    return getFavoriteVideoTagMaster({
        select: (res: FavoriteVideoTagResponseType) => {

            const tagComboList = res.data;

            return [
                ...tagComboList.map((e) => {
                    return {
                        value: e.tagName,
                        label: e.tagName,
                        tagColor: e.tagColor,
                    }
                })
            ]
        },
        enabled: !props.isGetChache,
    });
}