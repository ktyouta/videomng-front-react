import { useAtom, useAtomValue } from "jotai";
import { favoriteVideoMemoListAtom, favoriteVideoTagEditListAtom, favoriteVideoTagListAtom } from "../Atom/FavoriteAtom";
import { useState } from "react";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";
import { errResType } from "../../Common/Hook/useMutationWrapperBase";
import { FavoriteVideoMemoResponseType } from "../Type/FavoriteVideoMemoResponseType";
import { FavoriteVideoTagResponseType } from "../Type/FavoriteVideoTagResponseType";
import { FavoriteVideoTagType } from "../Type/FavoriteVideoTagType";
import { tagType } from "../../Common/Component/TagsComponent";


export function useFavoriteTagEditList() {

    // タグ編集リスト
    const [favoriteVideoTagEditList, setFavoriteVideoTagEditList] = useAtom(favoriteVideoTagEditListAtom);
    // タグマスタリスト
    const [tagMasterList, setTagMasterList] = useState<tagType[]>([]);

    // タグマスタリストを取得
    useQueryWrapper<FavoriteVideoTagResponseType>(
        {
            url: `${VIDEO_MNG_PATH}${ENV.TAG_INFO}`,
            afSuccessFn: (response: FavoriteVideoTagResponseType) => {

                const tagComboList = response.data.map((e: FavoriteVideoTagType) => {
                    return {
                        value: e.tagName,
                        label: e.tagName,
                    }
                });

                setTagMasterList((e) => {
                    return [
                        ...e,
                        ...tagComboList
                    ];
                })
            },
            afErrorFn: (res) => {
                const errRes = res as errResType;
            }
        }
    );

    /**
     * 入力欄のタグを編集リストに追加する
     */
    function addTagEditList(newTag: tagType) {

        // 編集リストに追加
        setFavoriteVideoTagEditList((e: tagType[]) => {
            return [newTag, ...e];
        });
    }

    /**
     * タグ削除
     * @param tagIndex 
     */
    function deleteTag(tagIndex: number) {
        setFavoriteVideoTagEditList((e) => {
            return e.filter((_, index) => index !== tagIndex);
        });
    }

    return {
        favoriteVideoTagEditList,
        deleteTag,
        tagMasterList,
        addTagEditList,
    }
}