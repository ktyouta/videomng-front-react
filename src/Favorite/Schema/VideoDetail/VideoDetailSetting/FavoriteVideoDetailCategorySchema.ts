import z from "zod";

export const FavoriteVideoDetailCategorySchema = z.object({
    userId: z.number(),
    videoId: z.string(),
    createDate: z.date(),
    updateDate: z.date(),
    deleteFlg: z.string(),
    categoryId: z.string(),
});