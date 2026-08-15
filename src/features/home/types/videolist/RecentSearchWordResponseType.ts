import { SearchWordType } from "./SearchWordType";

export type RecentSearchWordResponseType = {
    readonly status: number;
    readonly message: string;
    readonly data: SearchWordType[];
}