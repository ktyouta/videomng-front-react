import { loginSchema } from "../schemas/loginSchema";
import { LoginFormType } from "../types/LoginFormType";
import { useForm, } from "@tanstack/react-form";


type propsType = {
    onSubmit: (values: LoginFormType) => void
}

export function useLoginForm(props: propsType) {

    return useForm({
        defaultValues: {
            userName: "",
            password: "",
        },
        onSubmit: ({ value }) => {
            props.onSubmit(value);
        },
        validators: {
            onSubmit: loginSchema
        },
    });
}