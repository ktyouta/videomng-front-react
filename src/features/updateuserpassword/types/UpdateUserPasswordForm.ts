import z from "zod";
import { updateUserPasswordSchema } from "../schemas/updateUserPasswordSchema";

export type UpdateUserPasswordForm = z.infer<typeof updateUserPasswordSchema>;