import z from "zod";
import { updateUserInfoSchema } from "../schemas/updateUserInfoSchema";

export type UpdateUserInfoFormType = z.infer<typeof updateUserInfoSchema>;