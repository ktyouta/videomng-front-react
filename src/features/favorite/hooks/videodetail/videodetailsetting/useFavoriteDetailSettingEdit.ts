import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useMemo, useState } from "react";
import { FavoriteVideoDetailCategoryType } from "../../../types/videodetail/videodetailsetting/FavoriteVideoDetailCategoryType";
import useMutationWrapper from "../../../../../hooks/useMutationWrapper";
import { UpdateFavoriteVideoResponseDataType } from "../../../types/videodetail/videodetailsetting/UpdateFavoriteVideoResponseDataType";
import { errResType, resSchema, resType } from "../../../../../hooks/useMutationWrapperBase";
import ENV from "../../../../../env.json";
import { UpdateToFavoriteVideoReqestType } from "../../../types/videodetail/videodetailsetting/UpdateToFavoriteVideoReqestType";
import { toast } from "react-toastify";
import { VIDEO_MNG_PATH } from "../../../../../consts/CommonConst";
import { useViewStatusList } from "../../useViewStatusList";
import { useVideoId } from "../useVideoId";
import useQueryWrapper from "../../../../../hooks/useQueryWrapper";
import { FavoriteVideoCustomResponseType } from "../../../types/videodetail/videodetailsetting/FavoriteVideoCustomResponseType";
import { FavoriteVideoCustomDataType } from "../../../types/videodetail/videodetailsetting/FavoriteVideoCustomDataType";
import { useFavoriteDetailSettingEndpoint } from "./useFavoriteDetailSettingEndpoint";
import { useVideoCategory } from "../../../../main/hooks/useVideoCategory";
import { UpdateFavoriteVideoResponseDataSchema } from "../../../schemas/videodetail/videodetailsetting/UpdateFavoriteVideoResponseDataSchema";
import { ISVISIBLEAFTERFOLDERADD } from "../../../const/FavoriteConst";


type propsType = {
    changeView: () => void,
}


export function useFavoriteDetailSettingEdit(props: propsType) {

    // 動画カテゴリ
    const { data: videoCategory } = useVideoCategory();
    // 要約
    const [summary, setSummary] = useState(``);
    // カテゴリ
    const [categorys, setCategorys] = useState<string[]>([]);
    // 視聴状況
    const [viewStatus, setViewStatus] = useState(``);
    // 視聴状況リスト
    const { data: viewStatusList } = useViewStatusList();
    // お気に入り度
    const [favoriteLevel, setFavoriteLevel] = useState(0);
    // フォルダ内動画一覧画面表示フラグ
    const [isVisibleAfterFolderAdd, setIsVisibleAfterFolderAdd] = useState<string>(ISVISIBLEAFTERFOLDERADD.OFF);
    // 動画ID
    const videoId = useVideoId();

    // カスタム情報を取得
    const { data } = useQueryWrapper<FavoriteVideoCustomResponseType, FavoriteVideoCustomDataType>(
        {
            url: useFavoriteDetailSettingEndpoint(videoId),
            select: (res: FavoriteVideoCustomResponseType) => {
                return res.data;
            },
            afSuccessFn: (res: FavoriteVideoCustomDataType) => {

                const detail = res.detail;
                const categorys = res.categorys;

                setSummary(detail.summary);
                setCategorys(categorys.map((e: FavoriteVideoDetailCategoryType) => {
                    return e.categoryId;
                }));
                setViewStatus(detail.viewStatus);
                setFavoriteLevel(detail.favoriteLevel);
                setIsVisibleAfterFolderAdd(detail.isVisibleAfterFolderAdd);
            },
            afErrorFn: (res) => {
            }
        }
    );

    /**
     * お気に入り動画更新リクエスト
     */
    const postMutation = useMutationWrapper({
        url: useFavoriteDetailSettingEndpoint(videoId),
        method: "PUT",
        // 正常終了後の処理
        afSuccessFn: (res: unknown) => {

            // レスポンスの型チェック
            const resParsed = resSchema(UpdateFavoriteVideoResponseDataSchema).safeParse(res);

            if (!resParsed.success) {
                toast.error(`動画情報の更新に失敗しました。時間をおいて再度お試しください。`);
                return;
            }

            toast.success(`動画情報を更新しました。`);
            props.changeView();
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {
            toast.error(`動画情報の更新に失敗しました。`);
        },
    });

    /**
     * お気に入り動画を更新する
     * @param videoId 
     */
    function updateFavoriteVideo() {

        const body: UpdateToFavoriteVideoReqestType = {
            summary: summary,
            viewStatus: viewStatus,
            category: categorys,
            favoriteLevel: favoriteLevel,
            isVisibleAfterFolderAdd,
        }

        // リクエスト送信
        postMutation.mutate(body);
    }


    /**
     * カテゴリ選択イベント
     */
    function selectCategory(value: string,) {
        setCategorys((e) => {

            if (e.includes(value)) {
                e = e.filter((e1) => {
                    return e1 !== value;
                });
            }
            else {
                e = [...e, value];
            }

            return e;
        });
    }

    /**
     * お気に入り度アイコンクリックイベント
     * @param favoriteLevel 
     */
    function clickFavoriteLevelIcon(selectFavoriteLevel: number) {

        if (favoriteLevel === 1 && selectFavoriteLevel === 1) {
            setFavoriteLevel(0);
            return;
        }

        setFavoriteLevel(selectFavoriteLevel);
    }

    return {
        summary,
        setSummary,
        categorys,
        viewStatus,
        setViewStatus,
        viewStatusList,
        selectCategory,
        updateFavoriteVideo,
        favoriteLevel,
        setFavoriteLevel,
        clickFavoriteLevelIcon,
        videoCategory,
        tags: data?.tags,
        data,
        isVisibleAfterFolderAdd,
        setIsVisibleAfterFolderAdd,
    };
}