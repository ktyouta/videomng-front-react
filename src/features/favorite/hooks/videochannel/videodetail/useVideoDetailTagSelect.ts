import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IsLoginContext } from "../../../../../app/components/QueryApp";
import { VIDEO_MNG_PATH } from "../../../../../consts/CommonConst";
import { ROUTER_PATH } from "../../../../../consts/RouterPath";
import ENV from '../../../../../env.json';
import { useAppNavigation } from "../../../../../hooks/useAppNavigation";
import { mediaQuery, useMediaQuery } from "../../../../../hooks/useMediaQuery";
import useMutationWrapper from "../../../../../hooks/useMutationWrapper";
import { errResType, resSchema } from "../../../../../hooks/useMutationWrapperBase";
import { getFolderList } from "../../../api/getFolderList";
import { getFavoriteVideoTagMaster } from "../../../api/getFavoriteVideoTagMaster";
import { AddToFavoriteRequestType } from "../../../types/videochannel/videodetail/AddToFavoriteRequestType";
import { TagMasterType } from "../../../../../types/videodetail/TagMasterType";
import { FavoriteVideoTagResponseType } from "../../../types/videodetail/videotag/FavoriteVideoTagResponseType";
import { FavoriteVideoTagType } from "../../../types/videodetail/videotag/FavoriteVideoTagType";
import { FolderResponseType } from "../../../types/videolist/searcharea/filter/FolderResponseType";
import { useVideoId } from "./useVideoId";

export function useVideoDetailTagSelect() {
    // 動画ID
    const videoId = useVideoId();
    // ログインフラグ
    const isLogin = IsLoginContext.useCtx();
    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);
    const isTablet = useMediaQuery(mediaQuery.tablet);
    // タグマスタ
    const { data: tagMasterList } = getFavoriteVideoTagMaster<TagMasterType>({
        enabled: isLogin,
        select: (res: FavoriteVideoTagResponseType) => {
            return res.data.map((e: FavoriteVideoTagType) => {
                return {
                    tagId: e.tagId,
                    tagName: e.tagName,
                    tagColor: e.tagColor,
                }
            })
        }
    });
    // フォルダの選択肢
    const { data: folderOptions } = getFolderList({
        enabled: isLogin,
        select: (res: FolderResponseType) => {
            return [
                {
                    value: ``,
                    label: "未選択",
                },
                ...res.data.map((e) => {
                    return {
                        value: String(e.id),
                        label: e.name,
                    }
                })
            ];
        }
    });
    // 選択中のフォルダ
    const [selectedFolder, setSelectedFolder] = useState<number>();
    // ルーティング用
    const { appGoBack } = useAppNavigation();
    // セクション表示用タグマスタリスト
    const [displayTagMaster, setDisplayTagMaster] = useState<TagMasterType[]>([]);
    // 選択中のタグ
    const [selectedTagList, setSelectedTagList] = useState(new Map<number, TagMasterType>());
    // 入力中のキーワード
    const [inputKeyword, setInputKeyword] = useState(``);

    // tagMasterListは非同期取得のため、反映処理がないと取得完了前は表示が空になる
    useEffect(() => {

        if (!tagMasterList) {
            return;
        }

        setDisplayTagMaster(tagMasterList);
    }, [tagMasterList]);

    // folderOptionsは非同期取得のため、確定したタイミングで初期選択を行う
    useEffect(() => {

        if (!folderOptions || folderOptions.length === 0) {
            return;
        }

        setSelectedFolder(Number(folderOptions[0].value || "0"));
    }, [folderOptions]);

    /**
     * お気に入り登録リクエスト
     */
    const postMutation = useMutationWrapper({
        url: `${VIDEO_MNG_PATH}${ENV.FAVORITE_VIDEO}`,
        method: "POST",
        // 正常終了後の処理
        afSuccessFn: (res: unknown) => {

            // レスポンスの型チェック
            const resParsed = resSchema().safeParse(res);

            if (!resParsed.success) {
                toast.error(`お気に入り登録に失敗しました。時間をおいて再度お試しください。`);
                return;
            }

            const message = resParsed.data.message;
            if (message) {
                toast.success(message);
            }

            appGoBack(ROUTER_PATH.FAVORITE.ROOT);
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {

            const message = res.response.data.message;
            if (message) {
                toast.error(message);
            }
        },
    });

    /**
     * 動画をお気に入りに登録する
     */
    function submitFavorite() {

        const body: AddToFavoriteRequestType = {
            videoId,
            tagList: [...selectedTagList.keys()],
            folderId: selectedFolder,
        }

        // リクエスト送信
        postMutation.mutate(body);
    }

    /**
     * フォルダを選択
     * @param id
     */
    function selectFolder(id: number) {
        setSelectedFolder(id);
    }

    /**
     * 選択中のタグへの追加・解除を切り替える
     * @param tag
     */
    function toggleTagEditList(tag: TagMasterType) {

        const tagId = tag.tagId;
        setSelectedTagList((e) => {
            const newMap = new Map(e);
            if (newMap.has(tagId)) {
                newMap.delete(tagId);
            }
            else {
                newMap.set(tagId, tag);
            }
            return newMap;
        });
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

        setDisplayTagMaster(() => {

            // 入力したタイトルに一致するタグを取得
            const filterdTagList = tagMasterList.filter((e1) => {

                const title = e1.tagName;
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
        submitFavorite,
        isLogin,
        isMobile,
        isTablet,
        tagMasterList,
        handleKeyPress,
        clearInput,
        toggleTagEditList,
        displayTagMaster,
        selectedTagList,
        inputKeyword,
        setInputKeyword,
        filterTagMasterList,
        folderOptions,
        selectedFolder,
        selectFolder,
    }
}
