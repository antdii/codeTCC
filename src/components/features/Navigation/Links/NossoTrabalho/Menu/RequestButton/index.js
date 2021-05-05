import React from "react"
import { Link } from "react-router-dom"
import { BrandButtonDefault } from "../../../../../../library/Button"
import CadastreSugestaoButton from "../../../../../CadastreSugestao"


const RequestButton = () => {

    const login = (e) => e.preventDefault()

    return <BrandButtonDefault 
        type="button"
        value=" "
        classes="rounded-tr-none rounded-tl-none text-xs w-full"/>
}



export default RequestButton