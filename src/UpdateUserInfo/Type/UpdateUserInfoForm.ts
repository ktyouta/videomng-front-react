import z from "zod";
import { updateUserInfoSchema } from "../Schema/updateUserInfoSchema";

export type UpdateUserInfoFormType = z.infer<typeof updateUserInfoSchema>;