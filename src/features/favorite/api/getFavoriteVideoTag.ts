import { useQuery } from "react-query";
import { api } from "../../../lib/apiClient";
import { FavoriteVideoTagResponseType } from "../types/videodetail/videotag/FavoriteVideoTagResponseType";
import { FavoriteVideoTagType } from "../types/videodetail/videotag/FavoriteVideoTagType";
import { favoriteTagEndpoint } from "../utils/endpoint";
import { favoriteVideoKeys } from "./queryKey";

type PropsType = {
    videoId: string;
    select: (res: FavoriteVideoTagResponseType) => FavoriteVideoTagType[];
    onError: (res: unknown) => void;
}

export function getFavoriteVideoTag(props: PropsType) {

    return useQuery({
        queryKey: favoriteVideoKeys.tag(props.videoId),
        queryFn: async () => {
            const { data } = await api.get(favoriteTagEndpoint(props.videoId));
            return data;
        },
        select: props.select,
        onError: props.onError,
        enabled: !!props.videoId,
    });
}