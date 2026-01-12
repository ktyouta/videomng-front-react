import { Option } from "../../../../components/Selectbox";
import { VIDEO_MNG_PATH } from "../../../../consts/CommonConst";
import ENV from "../../../../env.json";
import useQueryWrapper from "../../../../hooks/useQueryWrapper";
import { FavoriteVideoTagResponseType } from "../../types/videodetail/videotag/FavoriteVideoTagResponseType";


type porpsType = {
    isGetChache: boolean,
}

export function useTagMasterList(props: porpsType) {

    // タグマスタリストを取得
    return useQueryWrapper<FavoriteVideoTagResponseType, (Option & { tagColor: string })[]>(
        {
            url: `${VIDEO_MNG_PATH}${ENV.TAG_INFO}`,
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
            afErrorFn: (res) => {
            },
            options: {
                enabled: !props.isGetChache
            }
        }
    );
}