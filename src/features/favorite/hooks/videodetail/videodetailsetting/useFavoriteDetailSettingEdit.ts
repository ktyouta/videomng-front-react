import { useState } from "react";
import { toast } from "react-toastify";
import { VIDEO_MNG_PATH } from "../../../../../consts/CommonConst";
import ENV from "../../../../../env.json";
import useMutationWrapper from "../../../../../hooks/useMutationWrapper";
import { errResType, resSchema } from "../../../../../hooks/useMutationWrapperBase";
import { useVideoCategory } from "../../../../main/hooks/useVideoCategory";
import { getFavoriteVideoCustom } from "../../../api/getFavoriteVideoCustom";
import { ISVISIBLEAFTERFOLDERADD } from "../../../const/FavoriteConst";
import { UpdateFavoriteVideoResponseDataSchema } from "../../../schemas/videodetail/videodetailsetting/UpdateFavoriteVideoResponseDataSchema";
import { FavoriteVideoCustomDataType } from "../../../types/videodetail/videodetailsetting/FavoriteVideoCustomDataType";
import { FavoriteVideoCustomResponseType } from "../../../types/videodetail/videodetailsetting/FavoriteVideoCustomResponseType";
import { FavoriteVideoDetailCategoryType } from "../../../types/videodetail/videodetailsetting/FavoriteVideoDetailCategoryType";
import { UpdateToFavoriteVideoReqestType } from "../../../types/videodetail/videodetailsetting/UpdateToFavoriteVideoReqestType";
import { useViewStatusList } from "../../useViewStatusList";
import { useVideoId } from "../useVideoId";


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
    // お気に入り動画更新リクエスト用エンドポイント
    const endpoint = videoId ? `${VIDEO_MNG_PATH}${ENV.FAVORITE_VIDEO_CUSTOM}`.replace(`:videoId`, videoId) : ``;

    // カスタム情報を取得
    const { data } = getFavoriteVideoCustom({
        videoId,
        select: (res: FavoriteVideoCustomResponseType) => {
            return res.data;
        },
        onSuccess: (res: FavoriteVideoCustomDataType) => {

            const detail = res.detail;
            const categorys = res.categorys;

            setSummary(detail.summary);
            setCategorys(categorys.map((e: FavoriteVideoDetailCategoryType) => {
                return e.categoryId;
            }));
            setViewStatus(detail.viewStatus);
            setFavoriteLevel(detail.favoriteLevel);
            setIsVisibleAfterFolderAdd(detail.isVisibleAfterFolderAdd);
        }
    });

    /**
     * お気に入り動画更新リクエスト
     */
    const postMutation = useMutationWrapper({
        url: endpoint,
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