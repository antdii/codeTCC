import React from "react"
import { OutlineField as PasswordField } from "../../../library/Textfield"
import Label from "../../../library/Label"

const SenhaCadastreSe = () => {
    const senha = {
        type: "password",
        id: "senha",
        placeholder: "••••••••••",
        isFocused: false,
        required: true,
        minlength: "8"
    };
    return < div className="mt-3 flex flex-col" >
        <div className="flex items-baseline">
            <Label value="Senha" />
            <p className="ml-auto text-xs font-helvetica font-medium text-brand">mínimo 8 caracteres</p>
        </div>
        <PasswordField {...senha} />
    </div >
}

export default SenhaCadastreSe

