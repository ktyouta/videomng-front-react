import z from "zod";
import { loginUserInfoSchema } from "../../Login/Schema/loginUserInfoSchema";

// ログインユーザー情報の型
export type LoginUserInfoType = z.infer<typeof loginUserInfoSchema>;