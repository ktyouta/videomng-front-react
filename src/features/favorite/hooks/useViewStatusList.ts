import { getViewStatusList } from "../api/getViewStatusList";
import { ViewStatusResponseType } from "../types/videolist/ViewStatusResponseType";


export function useViewStatusList() {


    // 視聴状況リストを取得
    return getViewStatusList({
        select: (res: ViewStatusResponseType) => {

            const items = res.data.map((e) => {
                return {
                    value: e.id,
                    label: e.label,
                }
            });

            return items;
        },
    });
}