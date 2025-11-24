import { z } from "zod";

export const FavoriteVideoVideoMngApiDataSchema = z.object({
    userId: z.number(),
    videoId: z.string(),
    summary: z.string(),
    viewStatus: z.string(),
    favoriteLevel: z.number(),
    createDate:z.string(),
    updateDate:z.string(),
});