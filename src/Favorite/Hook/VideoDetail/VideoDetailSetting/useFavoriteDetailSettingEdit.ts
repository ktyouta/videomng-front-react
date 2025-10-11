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


type propsType = {
    categoryList: comboType[] | undefined,
    summary: string,
    categorys: FavoriteVideoDetailCategoryType[],
    viewStatus: string,
    favoriteLevel: number,
    changeView: () => void,
    setSummary: React.Dispatch<React.SetStateAction<string>>,
    setCategorys: React.Dispatch<React.SetStateAction<FavoriteVideoDetailCategoryType[]>>,
    setViewStatus: React.Dispatch<React.SetStateAction<string>>,
    setFavoriteLevel: React.Dispatch<React.SetStateAction<number>>,
}


export function useFavoriteDetailSettingEdit(props: propsType) {

    // 要約
    const [summary, setSummary] = useState(props.summary);
    // カテゴリ
    const [categorys, setCategorys] = useState(props.categorys.map((e: FavoriteVideoDetailCategoryType) => {
        return e.categoryId;
    }));
    // 視聴状況
    const [viewStatus, setViewStatus] = useState(props.viewStatus);
    // 視聴状況リスト
    const { data: viewStatusList } = useViewStatusList();
    // お気に入り度
    const [favoriteLevel, setFavoriteLevel] = useState(props.favoriteLevel);
    // 動画ID
    const videoId = useVideoId();


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

            const data = resParsed.data.data;
            const detail = data.detail;

            props.setSummary(detail.summary);
            props.setViewStatus(detail.viewStatus);
            props.setCategorys(data.category);
            props.setFavoriteLevel(detail.favoriteLevel);

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
    };
}