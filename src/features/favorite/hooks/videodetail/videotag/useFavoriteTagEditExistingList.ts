import { useAtom, useAtomValue } from "jotai";
import { useState } from "react";
import useQueryWrapper from "../../../../../hooks/useQueryWrapper";
import { VIDEO_MNG_PATH } from "../../../../../consts/CommonConst";
import ENV from "../../../../../env.json";
import { errResType } from "../../../../../hooks/useMutationWrapperBase";
import { FavoriteVideoMemoResponseType } from "../../../types/videodetail/videomemo/FavoriteVideoMemoResponseType";
import { FavoriteVideoTagResponseType } from "../../../types/videodetail/videotag/FavoriteVideoTagResponseType";
import { FavoriteVideoTagType } from "../../../types/videodetail/videotag/FavoriteVideoTagType";
import { tagType } from "../../../../../components/TagsComponent";
import { toast } from "react-toastify";
import { useFavoriteTagEndpoint } from "./useFavoriteTagEndpoint";
import { FavoriteVideoTagEditListContext, SetFavoriteVideoTagEditListContext } from "../../../components/videodetail/videotag/FavoriteVideoTagEditListProvider";



export function useFavoriteTagEditExistingList() {

    // タグマスタリスト表示フラグ
    const [isOpenTagMasterList, setIsOpenTagMasterList] = useState(true);
    // タグ編集リスト
    const favoriteVideoTagEditList = FavoriteVideoTagEditListContext.useCtx();
    // タグ編集リスト(setter)
    const setFavoriteVideoTagEditList = SetFavoriteVideoTagEditListContext.useCtx();
    // セクション表示用タグマスタリスト
    const [displayTagMaster, setDisplayTagMaster] = useState<tagType[]>([]);
    // 入力中のキーワード
    const [inputKeyword, setInputKeyword] = useState(``);
    // タグマスタリストを取得
    const { data: tagMasterList } = useQueryWrapper<FavoriteVideoTagResponseType, tagType[]>(
        {
            url: `${VIDEO_MNG_PATH}${ENV.TAG_INFO}`,
            select: (res: FavoriteVideoTagResponseType) => {

                const tagComboList = res.data.map((e: FavoriteVideoTagType) => {
                    return {
                        value: e.tagName,
                        label: e.tagName,
                    }
                });

                return tagComboList;
            },
            afSuccessFn: (res: tagType[]) => {
                setDisplayTagMaster(res);
            },
            afErrorFn: (res) => {
                const errRes = res as errResType;
            }
        }
    );

    /**
     * 入力欄のタグを編集リストに追加する
     */
    function addTagEditList(addTag: tagType) {

        const existTag = favoriteVideoTagEditList.find((e) => {
            return e.label === addTag.label;
        });

        // 同名のタグが設定されている場合は追加しない
        if (existTag) {
            toast.error(`同名のタグが設定されています。`);
            return;
        }

        // 編集リストに追加
        setFavoriteVideoTagEditList((e: tagType[]) => {
            return [{ label: addTag.label, value: null }, ...e];
        });
    }

    /**
     * タグマスタリスト表示切り替え
     */
    function switchTagMasterList() {
        setIsOpenTagMasterList(!isOpenTagMasterList);
    }

    /**
     * 入力値初期化
     */
    function clearInput() {

        setInputKeyword(``);

        if (!tagMasterList) {
            return;
        }

        setDisplayTagMaster(tagMasterList);
    }

    /**
     * タグマスタリストのフィルター
     */
    function filterTagMasterList() {

        if (!tagMasterList) {
            return;
        }

        // 入力欄が空の場合は動画情報をリセット
        if (!inputKeyword) {
            setDisplayTagMaster(tagMasterList);
            return;
        }

        setDisplayTagMaster((e) => {

            // 入力したタイトルに一致するタグを取得
            const filterdTagList = tagMasterList.filter((e1) => {

                const title = e1.label;
                return title.includes(inputKeyword);
            });

            return filterdTagList;
        });
    }

    /**
     * エンターキー押下時イベント
     */
    function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            filterTagMasterList();
        }
    };

    return {
        displayTagMaster,
        addTagEditList,
        isOpenTagMasterList,
        switchTagMasterList,
        inputKeyword,
        setInputKeyword,
        filterTagMasterList,
        clearInput,
        handleKeyPress,
        tagMasterList,
    }
}