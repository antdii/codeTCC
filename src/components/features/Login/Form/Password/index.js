import React from "react"
import { Link } from "react-router-dom"
import { OutlineField as PasswordField } from "../../../../library/Textfield"
import Label from "../../../../library/Label"


const Password = () => {

    const password = {
        type: "password",
        id: "password",
        placeholder: "••••••••••",
        isFocused: false,
        hidden: true
    };

    return < div className="mt-3 flex flex-col" >
        <div className="flex items-baseline">
            <Label value="Senha" />
            <EsqueceuSenhaLink />
        </div>
        <PasswordField {...password} />
    </div >
}

const EsqueceuSenhaLink = () => (
    <Link to="/esqueceu-senha" className="ml-auto text-xs font-helvetica font-medium text-brand">
        Esqueceu a senha?
    </Link>
)

export default Password