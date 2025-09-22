import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signupSchema } from "../Schema/signupSchema";
import { SignupForm } from "../Type/SignupForm";


export function useSignupForm() {

    return useForm<SignupForm>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            userName: ``,
            birthday: {
                year: ``,
                month: ``,
                day: ``,
            },
            password: ``,
            confirmPassword: ``,
        },
        mode: "onSubmit",
        reValidateMode: "onSubmit",
    });
}