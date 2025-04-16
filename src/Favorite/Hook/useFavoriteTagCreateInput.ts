import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import { FavoriteVideoTagResponseType } from "../Type/FavoriteVideoTagResponseType";
import ENV from "../../env.json";
import { useState } from "react";
import { FavoriteVideoTagType } from "../Type/FavoriteVideoTagType";
import { errResType } from "../../Common/Hook/useMutationWrapperBase";
import { tagType } from "../../Common/Component/TagsComponent";


export function useFavoriteTagCreateInput() {

    // サジェスト用タグリスト
    const [suggestTagList, setSuggestTagList] = useState<tagType[]>([]);
    // 追加用タグリスト
    const [addTagList, setAddTagList] = useState<tagType[]>([]);

    // サジェスト用タグリストを取得
    useQueryWrapper<FavoriteVideoTagResponseType>(
        {
            url: `${VIDEO_MNG_PATH}${ENV.FAVORITE_VIDEO_TAG}`,
            afSuccessFn: (response: FavoriteVideoTagResponseType) => {
                setSuggestTagList(response.data.map((e: FavoriteVideoTagType) => {
                    return {
                        value: e.tagId,
                        label: e.tagName,
                    }
                }));
            },
            afErrorFn: (res) => {
                const errRes = res as errResType;
            }
        }
    );

    /**
     * タグを追加
     */
    function addTag(newTag: tagType) {

        setAddTagList((e) => {

            if (e.find((e1) => e1.label === newTag.label)) {
                alert(`同名のタグを設定できません。`);
                return e;
            }

            return [...e, { label: newTag.label, value: `` }];
        });
    }

    /**
     * タグを削除
     * @param tag 
     */
    function deleteTag(tagIndex: number) {

        setAddTagList((e) => {
            return e.filter((_, index) => index !== tagIndex);
        });
    }

    return {
        suggestTagList,
        addTagList,
        addTag,
        deleteTag
    }
}