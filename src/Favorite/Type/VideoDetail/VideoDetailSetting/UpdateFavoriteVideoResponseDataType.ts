import z from "zod";
import { UpdateFavoriteVideoResponseDataSchema } from "../../../Schema/VideoDetail/VideoDetailSetting/UpdateFavoriteVideoResponseDataSchema";

export type UpdateFavoriteVideoResponseDataType = z.infer<typeof UpdateFavoriteVideoResponseDataSchema>;