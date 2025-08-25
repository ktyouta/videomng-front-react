import { VIDEO_MNG_PATH } from "../../../../Common/Const/CommonConst";
import useQueryWrapper from "../../../../Common/Hook/useQueryWrapper";
import { FavoriteVideoTagResponseType } from "../../../Type/VideoDetail/VideoTag/FavoriteVideoTagResponseType";
import ENV from "../../../../env.json";
import { useEffect, useState } from "react";
import { FavoriteVideoTagType } from "../../../Type/VideoDetail/VideoTag/FavoriteVideoTagType";
import { errResType } from "../../../../Common/Hook/useMutationWrapperBase";
import { tagType } from "../../../../Common/Component/TagsComponent";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { toast } from "react-toastify";
import { mediaQuery, useMediaQuery } from "../../../../Common/Hook/useMediaQuery";


type propsType = {
    favoriteVideoTagEditList: tagType[],
    setFavoriteVideoTagEditList: React.Dispatch<React.SetStateAction<tagType[]>>
}

export function useFavoriteTagCreateInput(props: propsType) {

    // 追加用タグリスト
    const [addTagList, setAddTagList] = useState<tagType[]>([]);
    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);

    // サジェスト用タグリストを取得
    const { data: suggestTagList } = useQueryWrapper<FavoriteVideoTagResponseType, tagType[]>(
        {
            url: `${VIDEO_MNG_PATH}${ENV.TAG_INFO}`,
            select: (res: FavoriteVideoTagResponseType) => {

                const suggestTagList = res.data.map((e: FavoriteVideoTagType) => {
                    return {
                        value: e.tagId,
                        label: e.tagName,
                    }
                });

                return suggestTagList;
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

            if (props.favoriteVideoTagEditList.find((e1) => e1.label === newTag.label)) {
                toast.error(`同名のタグが設定されています。`);
                return e;
            }

            if (e.find((e1) => e1.label === newTag.label)) {
                toast.error(`同名のタグを設定できません。`);
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
        props.setFavoriteVideoTagEditList((e) => {
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
        isMobile,
    }
}