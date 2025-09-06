import { useViewStatusList } from "../../useViewStatusList";


export function useFavoriteDetailSettingView() {

    // 視聴状況リストを取得
    const { data: viewStatusList } = useViewStatusList();

    return {
        viewStatusList
    };
}