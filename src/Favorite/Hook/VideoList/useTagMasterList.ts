import { comboType } from "../../../Common/Component/ComboComponent";
import { VIDEO_MNG_PATH } from "../../../Common/Const/CommonConst";
import useQueryWrapper from "../../../Common/Hook/useQueryWrapper";
import { FavoriteVideoTagResponseType } from "../../Type/VideoDetail/VideoTag/FavoriteVideoTagResponseType";
import ENV from "../../../env.json";


type porpsType = {
    isGetChache: boolean,
}

export function useTagMasterList(props: porpsType) {

    // タグマスタリストを取得
    return useQueryWrapper<FavoriteVideoTagResponseType, comboType[]>(
        {
            url: `${VIDEO_MNG_PATH}${ENV.TAG_INFO}`,
            select: (res: FavoriteVideoTagResponseType) => {

                const tagComboList = res.data;

                return [
                    {
                        value: ``,
                        label: `すべて`,
                    },
                    ...tagComboList.map((e) => {
                        return {
                            value: e.tagName,
                            label: e.tagName,
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