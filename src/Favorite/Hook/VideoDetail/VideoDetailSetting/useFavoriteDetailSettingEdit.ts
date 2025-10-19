import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useMemo, useState } from "react";
import { EDIT_MODE } from "../../../Const/FavoriteConst";
import { FavoriteVideoDetailDataType } from "../../../Type/VideoDetail/FavoriteVideoDetailDataType";
import { comboType } from "../../../../Common/Component/ComboComponent";
import { FavoriteVideoDetailCategoryType } from "../../../Type/VideoDetail/VideoDetailSetting/FavoriteVideoDetailCategoryType";
import useMutationWrapper from "../../../../Common/Hook/useMutationWrapper";
import { UpdateFavoriteVideoResponseDataType } from "../../../Type/VideoDetail/VideoDetailSetting/UpdateFavoriteVideoResponseDataType";
import { errResType, resSchema, resType } from "../../../../Common/Hook/useMutationWrapperBase";
import ENV from "../../../../env.json";
import { UpdateToFavoriteVideoReqestType } from "../../../Type/VideoDetail/VideoDetailSetting/UpdateToFavoriteVideoReqestType";
import { toast } from "react-toastify";
import { VIDEO_MNG_PATH } from "../../../../Common/Const/CommonConst";
import { useViewStatusList } from "../../useViewStatusList";
import { useVideoId } from "../useVideoId";
import { UpdateFavoriteVideoResponseDataSchema } from "../../../Schema/VideoDetail/VideoDetailSetting/UpdateFavoriteVideoResponseDataSchema";
import useQueryWrapper from "../../../../Common/Hook/useQueryWrapper";
import { FavoriteVideoCustomResponseType } from "../../../Type/VideoDetail/VideoDetailSetting/FavoriteVideoCustomResponseType";
import { FavoriteVideoCustomDataType } from "../../../Type/VideoDetail/VideoDetailSetting/FavoriteVideoCustomDataType";
import { useFavoriteDetailSettingEndpoint } from "./useFavoriteDetailSettingEndpoint";
import { useVideoCategory } from "../../../../Main/Hook/useVideoCategory";


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
    const { data: viewStatusList } = useViewStatusList({ isExcludeAll: true });
    // お気に入り度
    const [favoriteLevel, setFavoriteLevel] = useState(0);
    // 動画ID
    const videoId = useVideoId();

    // カスタム情報を取得
    useQueryWrapper<FavoriteVideoCustomResponseType, FavoriteVideoCustomDataType>(
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
            },
            afErrorFn: (res) => {
            }
        }
    );

    /**
     * お気に入り動画更新リクエスト
     */
    const postMutation = useMutationWrapper({
        url: `${VIDEO_MNG_PATH}${ENV.FAVORITE_VIDEO}/${videoId}`,
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
    };
}