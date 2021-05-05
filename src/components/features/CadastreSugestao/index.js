import React from "react"
import { Link } from "react-router-dom"
import { BrandButtonDefault } from "../../library/Button"

const CadastreSugestaoButton = () => (
    <Link to="/cadastro/projeto" tabIndex="-1">
        <BrandButtonDefault
            type="button"
            value="Cadastrar Sugestão"
            classes="xs:py-3 xs:px-4 xs:text-sm
                     sm:py-3 sm:px-4 sm:text-sm
                     w-auto px-8 py-4 mt-8"
        />
    </Link>)


export default CadastreSugestaoButton