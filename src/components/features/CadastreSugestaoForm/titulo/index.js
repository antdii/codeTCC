import React from "react"
import { OutlineField as TextField } from "../../../library/Textfield"
import Label from "../../../library/Label"

const TituloProjeto = () => {
    const titulo = {
        type: "text",
        id: "titulo",
        placeholder: "Digite um titulo",
        isFocused: true,
        required: true
    }
    return <div className="flex flex-col" >
    <Label value="Título da Sugestão" />
    <TextField {...titulo} />
    </div >
}

export default TituloProjeto

