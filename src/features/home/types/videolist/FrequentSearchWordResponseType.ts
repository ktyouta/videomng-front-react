import { SearchWordType } from "./SearchWordType";

export type FrequentSearchWordResponseType = {
    readonly status: number;
    readonly message: string;
    readonly data: SearchWordType[];
}