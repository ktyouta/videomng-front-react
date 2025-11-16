import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { ViewStatusResponseType } from "../types/videolist/ViewStatusResponseType";
import useQueryWrapper from "../../../hooks/useQueryWrapper";
import { VIDEO_MNG_PATH } from "../../../consts/CommonConst";
import ENV from "../../../env.json";
import { Option } from "../../../components/Selectbox";


export function useViewStatusList() {


    // 視聴状況リストを取得
    return useQueryWrapper<ViewStatusResponseType, Option[]>(
        {
            url: `${VIDEO_MNG_PATH}${ENV.VIEW_STATUS}`,
            select: (res: ViewStatusResponseType) => {

                const items = res.data.map((e) => {
                    return {
                        value: e.id,
                        label: e.label,
                    }
                });

                return items;
            },
            afErrorFn: (res) => {
            },
            options: {
                // 初回に読み込んだカテゴリを使いまわす
                staleTime: Infinity
            }
        }
    );
}