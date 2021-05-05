import React from "react"
import { OutlineField as EmailField } from "../../../library/Textfield"
import Label from "../../../library/Label"

const EmailCadastreSe = () => {
    const email = {
        type: "email",
        id: "email",
        placeholder: "nome@exemplo.com",
        isFocused: false,
        required: true
    }
    return <div className="flex flex-col" >
    <Label value="Email" />
    <EmailField {...email} />
    </div >
}

export default EmailCadastreSe

