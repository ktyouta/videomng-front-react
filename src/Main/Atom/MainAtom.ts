import { atom } from "jotai";
import { VideoCategoryDataType } from "../Type/VideoCategoryDataType";

// APIから取得した動画カテゴリ
export const videoCategoryAtom = atom<VideoCategoryDataType | undefined>();