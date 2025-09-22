import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginUserInfoType } from "../../Common/Type/LoginUserInfoType";
import { UpdateUserPasswordForm } from "../Type/UpdateUserPasswordForm";
import { updateUserPasswordSchema } from "../Schema/updateUserPasswordSchema";

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