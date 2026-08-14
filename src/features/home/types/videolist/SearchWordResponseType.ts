import { SearchWordType } from "./SearchWordType";

export type SearchWordResponseType = {
    readonly status: number,
    readonly message: string,
    readonly data: {
        recent: SearchWordType[];
        frequent: SearchWordType[];
    },
}