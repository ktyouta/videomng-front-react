import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { ViewStatusResponseType } from "../Type/ViewStatusResponseType";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";
import { errResType } from "../../Common/Hook/useMutationWrapperBase";
import { useEffect, useState } from "react";
import { comboType } from "../../Common/Component/ComboComponent";
import { favoriteVideoApiUrlAtom, selectedFavoriteVideoCategoryAtom, selectedFavoriteVideoTagAtom, selectedFavoriteVideoviewStatusAtom } from "../Atom/FavoriteAtom";
import { VideoListApiUrlModel } from "../../Home/Model/VideoListApiUrlModel";
import { FavoriteVideoListApiUrlModel } from "../Model/FavoriteVideoListApiUrlModel";


export function useFavorite() {

    // 視聴状況リスト
    const [viewStatusList, setViewStatusList] = useState<comboType[]>([]);
    // お気に入り動画ID
    const [favoriteVideoId, setFavoriteVideoId] = useState(``);
    // お気に入り動画リスト取得URL
    const setFavoriteVideoUrl = useSetAtom(favoriteVideoApiUrlAtom);
    // 動画一覧検索条件選択値(カテゴリ)
    const setSelectedFavoriteVideoCategory = useSetAtom(selectedFavoriteVideoCategoryAtom);
    // 動画一覧検索条件選択値(視聴状況)
    const setSelectedFavoriteVideoviewStatus = useSetAtom(selectedFavoriteVideoviewStatusAtom);
    // 動画一覧検索条件選択値(タグ)
    const setSelectedFavoriteVideoTag = useSetAtom(selectedFavoriteVideoTagAtom);


    // 視聴状況リストを取得
    useQueryWrapper<ViewStatusResponseType>(
        {
            url: `${VIDEO_MNG_PATH}${ENV.VIEW_STATUS}`,
            afSuccessFn: (response: ViewStatusResponseType) => {
                setViewStatusList(response.data.map((e) => {
                    return {
                        value: e.id,
                        label: e.label,
                    }
                }));
            },
            afErrorFn: (res) => {
            }
        }
    );

    // URL直打ち対応
    useEffect(() => {

        const pathArray = window.location.pathname.split("/");

        if (pathArray.length < 2) {
            return;
        }

        const query = window.location.search;

        // 動画一覧
        if (pathArray.length == 2) {

            let videoCategory = ``;
            let viewStatus = ``;
            let videoTag = ``;

            // クエリパラメータが設定されている場合
            if (query && query.length > 0 && query.charAt(0) === `?`) {

                const params = new URLSearchParams(query);
                const videoCategoryValue = params.get(`videocategory`);
                const viewStatusValue = params.get(`viewstatus`);
                const videoTagValue = params.get(`videotag`);

                videoCategory = videoCategoryValue !== null ? videoCategoryValue : ``;
                viewStatus = viewStatusValue !== null ? viewStatusValue : ``;
                videoTag = videoTagValue !== null ? videoTagValue : ``;
            }

            // 検索条件の初期値設定
            setSelectedFavoriteVideoCategory(videoCategory);
            setSelectedFavoriteVideoviewStatus(viewStatus);
            setSelectedFavoriteVideoTag(videoTag);

            const videoListApiUrlModel = new FavoriteVideoListApiUrlModel({
                videoCategory,
                viewStatus,
                videoTag,
            });

            setFavoriteVideoUrl(videoListApiUrlModel.url);
        }
        // 動画詳細
        else if (pathArray.length == 3) {

            // ID部分を取得
            const videoId = pathArray[2];
            setFavoriteVideoId(videoId);
        }

        // アンマウント時に検索条件をリセット
        return (() => {
            setSelectedFavoriteVideoCategory(``);
            setSelectedFavoriteVideoviewStatus(``);
            setSelectedFavoriteVideoTag(``);
        })

    }, []);

    return {
        favoriteVideoId,
        setFavoriteVideoId,
        viewStatusList,
    }
}