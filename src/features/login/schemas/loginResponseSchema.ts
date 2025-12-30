import z from "zod";
import { loginUserInfoSchema } from "./loginUserInfoSchema";

export const loginResponseSchema = z.object({
    userInfo: loginUserInfoSchema,
});