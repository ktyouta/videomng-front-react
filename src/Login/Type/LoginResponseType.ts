import z from "zod";
import { loginUserInfoSchema } from "../Schema/loginUserInfoSchema";

// ユーザー情報
export type LoginResponseType = z.infer<typeof loginUserInfoSchema>;