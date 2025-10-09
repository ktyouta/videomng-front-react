import z from "zod";
import { FavoriteVideoDetailCategorySchema } from "../../../Schema/VideoDetail/VideoDetailSetting/FavoriteVideoDetailCategorySchema";

export type FavoriteVideoDetailCategoryType = z.infer<typeof FavoriteVideoDetailCategorySchema>;