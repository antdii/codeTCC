import React from "react"
import { OutlineField as TextField } from "../../../library/Textfield"
import Label from "../../../library/Label"

const NomeCadastreSe = () => {
    const nome = {
        type: "text",
        id: "nome",
        placeholder: "Nome Completo",
        isFocused: true,
        required: true
    }
    return <div className="flex flex-col" >
    <Label value="Nome" />
    <TextField {...nome} />
    </div >
}

export default NomeCadastreSe

