import z from "zod";
import { updateUserPasswordSchema } from "../Schema/updateUserPasswordSchema";

export type UpdateUserPasswordForm = z.infer<typeof updateUserPasswordSchema>;