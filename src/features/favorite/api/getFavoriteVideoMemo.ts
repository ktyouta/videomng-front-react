import { useQuery } from "react-query";
import { api } from "../../../lib/apiClient";
import { FavoriteVideoMemoResponseType } from "../types/videodetail/videomemo/FavoriteVideoMemoResponseType";
import { FavoriteVideoMemoType } from "../types/videodetail/videomemo/FavoriteVideoMemoType";
import { favoriteMemoEndpoint } from "../utils/endpoint";
import { favoriteVideoKeys } from "./queryKey";

type PropsType = {
    videoId: string;
    select: (res: FavoriteVideoMemoResponseType) => FavoriteVideoMemoType[];
    onError: (res: unknown) => void;
}

export function getFavoriteVideoMemo(props: PropsType) {

    return useQuery({
        queryKey: favoriteVideoKeys.memo(props.videoId),
        queryFn: async () => {
            const { data } = await api.get(favoriteMemoEndpoint(props.videoId));
            return data;
        },
        select: props.select,
        onError: props.onError,
        enabled: !!props.videoId,
    });
}