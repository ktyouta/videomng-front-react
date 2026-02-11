import { getVideoCategory } from "../../api/getVideoCategory";
import { VideoCategoryResponseType } from "../types/VideoCategoryResponseType";


export function useVideoCategory() {

    // 動画カテゴリを取得
    return getVideoCategory({
        select: (res: VideoCategoryResponseType) => {

            const category = res.data.items;

            const items = category.map((e) => {
                const label = e.snippet.title;
                const value = e.id;

                return {
                    label: label,
                    value: value,
                }
            });

            return items;
        },
    });

}