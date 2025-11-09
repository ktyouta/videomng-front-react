import z from "zod";
import { FavoriteVideoVideoMngApiDataSchema } from "../FavoriteVideoVideoMngApiDataSchema";
import { FavoriteVideoDetailCategorySchema } from "./FavoriteVideoDetailCategorySchema";

export const UpdateFavoriteVideoResponseDataSchema = z.object({
    detail: FavoriteVideoVideoMngApiDataSchema,
    category: z.array(FavoriteVideoDetailCategorySchema),
});