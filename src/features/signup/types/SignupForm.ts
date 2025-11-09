import z from "zod";
import { updateUserInfoSchema } from "../../updateuserinfo/schemas/updateUserInfoSchema";
import { signupSchema } from "../schemas/signupSchema";


export type SignupForm = z.infer<typeof signupSchema>;