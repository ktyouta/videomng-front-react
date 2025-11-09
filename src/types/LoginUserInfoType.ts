import z from "zod";
import { loginUserInfoSchema } from "../features/login/schemas/loginUserInfoSchema";

// ログインユーザー情報の型
export type LoginUserInfoType = z.infer<typeof loginUserInfoSchema>;