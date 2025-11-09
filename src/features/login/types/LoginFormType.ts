import z from "zod";
import { loginSchema } from "../schemas/loginSchema";

export type LoginFormType = z.infer<typeof loginSchema>;