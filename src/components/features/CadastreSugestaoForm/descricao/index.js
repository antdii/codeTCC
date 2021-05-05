import React from "react"
import { OutArea as TextArea } from "../../../library/TextArea"
import Label from "../../../library/Label"

const DescricaoSugestao = () => {
    const descricao = {
        name: "descricao-sugestao",
        id: "descricao",
        placeholder: "Digite uma descrição para sua Sugestão",
        isFocused: false,
        required: true,
        rows: "3",
        resize: "vertical"
    }
    return <div className="flex flex-col" >
    <Label value="Descrição da Sugestão" />
    <TextArea {...descricao} />
    </div >
}

export default DescricaoSugestao

