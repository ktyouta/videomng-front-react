import { useViewStatusList } from "../useViewStatusList";
import { useTagMasterList } from "./useTagMasterList";

export function useFavoriteVideoList() {

    // マウント時にタグマスタを取得
    useTagMasterList({
        isGetChache: false
    });

    // マウント時に視聴状況を取得
    useViewStatusList();
}