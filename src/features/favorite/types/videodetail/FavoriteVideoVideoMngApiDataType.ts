import z from "zod";
import { FavoriteVideoVideoMngApiDataSchema } from "../../schemas/videodetail/FavoriteVideoVideoMngApiDataSchema";

export type FavoriteVideoVideoMngApiDataType = z.infer<typeof FavoriteVideoVideoMngApiDataSchema>;