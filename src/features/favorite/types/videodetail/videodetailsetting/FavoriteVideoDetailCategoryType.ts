import z from "zod";
import { FavoriteVideoDetailCategorySchema } from "../../../schemas/videodetail/videodetailsetting/FavoriteVideoDetailCategorySchema";

export type FavoriteVideoDetailCategoryType = z.infer<typeof FavoriteVideoDetailCategorySchema>;