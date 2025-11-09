import { useVideoCategory } from "./useVideoCategory";

export function useMain() {

    // マウント時にカテゴリを読み込む
    useVideoCategory();

}