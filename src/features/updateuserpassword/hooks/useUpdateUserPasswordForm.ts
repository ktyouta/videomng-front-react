import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { UpdateUserPasswordForm } from "../types/UpdateUserPasswordForm";
import { updateUserPasswordSchema } from "../schemas/updateUserPasswordSchema";

export function useUpdateUserPasswordForm() {

    return useForm<UpdateUserPasswordForm>({
        resolver: zodResolver(updateUserPasswordSchema),
        defaultValues: {
            currentPassword: ``,
            newPassword: ``,
            confirmPassword: ``,
        },
        mode: "onSubmit",
        reValidateMode: "onSubmit",
    });
}