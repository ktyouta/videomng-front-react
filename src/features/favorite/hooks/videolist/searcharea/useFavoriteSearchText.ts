import { useState } from "react";
import { getFavoriteVideoList } from "../../../api/getFavoriteVideoList";
import { SetDisplayFolderListContext, SetDisplayVideoListContext } from "../../../components/videolist/FavoriteVideoDisplayVideoListProvider";
import { FavoriteVideoListResponseType } from "../../../types/videolist/FavoriteVideoListResponseType";
import { useFavoriteVideoSearchConditionValue } from "../../useFavoriteVideoSearchConditionValue";

export function useFavoriteSearchText() {

    // 入力中のキーワード
    const [inputKeyword, setInputKeyword] = useState(``);
    // 画面表示用の動画リスト(setter)
    const setDisplayVideoList = SetDisplayVideoListContext.useCtx();
    // 画面表示用のフォルダリスト(setter)
    const setDisplayFolderList = SetDisplayFolderListContext.useCtx();
    // 検索条件
    const searchConditionObj = useFavoriteVideoSearchConditionValue();
    // 動画一覧
    const { data } = getFavoriteVideoList({
        searchConditionObj,
        select: (res: FavoriteVideoListResponseType) => {
            return res.data;
        },
        enabled: false,
    });

    /**
     * 入力値および表示用動画情報を初期化
     */
    function clearInput() {
        setInputKeyword(``);

        if (!data) {
            return;
        }

        setDisplayVideoList(data.item);
        setDisplayFolderList(data.folder);
    }


    /**
     * 動画一覧のフィルター
     */
    function filterVideoList() {

        if (!data) {
            return;
        }

        // 入力欄が空の場合は動画情報をリセット
        if (!inputKeyword) {
            setDisplayVideoList(data.item);
            setDisplayFolderList(data.folder);
            return;
        }

        setDisplayVideoList((e) => {

            // 入力したタイトルに一致する動画を取得
            const filterdVideoList = data.item.filter((e1) => {

                const title = e1.snippet.title;
                return title.includes(inputKeyword);
            });

            return filterdVideoList;
        });

        setDisplayFolderList((e) => {

            // 入力したタイトルに一致する動画を取得
            const filterdFolderList = data.folder.filter((e1) => {

                const title = e1.name;
                return title.includes(inputKeyword);
            });

            return filterdFolderList;
        });
    }

    /**
     * エンターキー押下時イベント
     */
    function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            filterVideoList();
        }
    };

    return {
        inputKeyword,
        setInputKeyword,
        clearInput,
        filterVideoList,
        handleKeyPress,
    }
}