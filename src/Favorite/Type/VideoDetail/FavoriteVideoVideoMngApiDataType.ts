import z from "zod";
import { FavoriteVideoVideoMngApiDataSchema } from "../../Schema/VideoDetail/FavoriteVideoVideoMngApiDataSchema";

export type FavoriteVideoVideoMngApiDataType = z.infer<typeof FavoriteVideoVideoMngApiDataSchema>;