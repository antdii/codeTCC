import React from "react"
import { Link } from "react-router-dom"
import { BrandButtonDefault } from "../../library/Button"
  

const CadastreSeButton = () => (
    <Link to="/cadastro/usuario" className="mr-5">
        <BrandButtonDefault
            type="button"
            value="Cadastre-se"
        />
    </Link>
    )

export default CadastreSeButton