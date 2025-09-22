import z from "zod";
import { updateUserInfoSchema } from "../../UpdateUserInfo/Schema/updateUserInfoSchema";
import { signupSchema } from "../Schema/signupSchema";


export type SignupForm = z.infer<typeof signupSchema>;