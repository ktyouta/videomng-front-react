import z from "zod";

export const FavoriteVideoDetailCategorySchema = z.object({
    userId: z.number(),
    videoId: z.string(),
    createDate: z.coerce.date(),
    updateDate: z.coerce.date(),
    deleteFlg: z.string(),
    categoryId: z.string(),
});