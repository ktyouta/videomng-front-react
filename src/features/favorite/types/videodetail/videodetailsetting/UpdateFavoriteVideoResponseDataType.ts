import z from "zod";
import { UpdateFavoriteVideoResponseDataSchema } from "../../../schemas/videodetail/videodetailsetting/UpdateFavoriteVideoResponseDataSchema";

export type UpdateFavoriteVideoResponseDataType = z.infer<typeof UpdateFavoriteVideoResponseDataSchema>;