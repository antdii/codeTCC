import React from "react"
import { OutlineField as TextField } from "../../../library/Textfield"
import Label from "../../../library/Label"
import { Link } from "react-router-dom"
import { PlusCircleIcon, PlusIcon, PlusSmIcon } from "@heroicons/react/solid"

const ObjetivoSugestao = () => {
    const objetivo = {
        type: "text",
        id: "objetivo",
        placeholder: "Digite um objetivo",
        isFocused: true,
        required: true,
    }
    return <div className="flex flex-col" >
    <Label value="Objetivo" />
    <div class="flex align-middle">
    <TextField {...objetivo} />
    <Link>
        <PlusIcon class="h-10" />
    </Link>
    </div>
        
    </div >
}

export default ObjetivoSugestao

