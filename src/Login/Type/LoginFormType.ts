import z from "zod";
import { loginSchema } from "../Schema/loginSchema";

export type LoginFormType = z.infer<typeof loginSchema>;