import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import { FavoriteVideoTagResponseType } from "../Type/FavoriteVideoTagResponseType";
import ENV from "../../env.json";
import { useEffect, useState } from "react";
import { FavoriteVideoTagType } from "../Type/FavoriteVideoTagType";
import { errResType } from "../../Common/Hook/useMutationWrapperBase";
import { tagType } from "../../Common/Component/TagsComponent";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { favoriteVideoTagEditListAtom, favoriteVideoTagListAtom } from "../Atom/FavoriteAtom";


export function useFavoriteTagCreateInput() {

    // サジェスト用タグリスト
    const [suggestTagList, setSuggestTagList] = useState<tagType[]>([]);
    // 追加用タグリスト
    const [addTagList, setAddTagList] = useState<tagType[]>([]);
    // タグ編集リスト
    const [favoriteVideoTagEditList, setFavoriteVideoTagEditList] = useAtom(favoriteVideoTagEditListAtom);
    // お気に入り動画タグリスト
    const favoriteVideoTagList = useAtomValue(favoriteVideoTagListAtom);

    // サジェスト用タグリストを取得
    useQueryWrapper<FavoriteVideoTagResponseType>(
        {
            url: `${VIDEO_MNG_PATH}${ENV.TAG_INFO}`,
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

    useEffect(() => {
        if (!favoriteVideoTagList) {
            setFavoriteVideoTagEditList([]);
            return;
        }

        setFavoriteVideoTagEditList(favoriteVideoTagList.map((e) => {
            return {
                label: e.tagName,
                value: e.tagId,
            }
        }));
    }, [favoriteVideoTagList]);

    /**
     * タグを追加
     */
    function addTag(newTag: tagType) {

        setAddTagList((e) => {

            if (favoriteVideoTagEditList.find((e1) => e1.label === newTag.label)) {
                alert(`同名のタグが設定されています。`);
                return e;
            }

            if (e.find((e1) => e1.label === newTag.label)) {
                alert(`同名のタグを設定できません。`);
                return e;
            }

            return [...e, { label: newTag.label, value: null }];
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

    /**
     * 入力欄のタグを編集リストに追加する
     */
    function addTagEditList() {
        // 編集リストに追加
        setFavoriteVideoTagEditList((e) => {
            return [...addTagList, ...e];
        });

        // 追加用タグリストをリセット
        setAddTagList([]);
    }

    return {
        suggestTagList,
        addTagList,
        addTag,
        deleteTag,
        addTagEditList,
    }
}