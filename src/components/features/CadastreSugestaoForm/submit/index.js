import React from "react"
import { BrandButtonLarge as SaveButton } from "../../../library/Button"


const SalvarFormButton = () => {

    const salvar = (e) => e.preventDefault()

    return <SaveButton
        type="submit"
        value="Salvar"
        event={salvar}
        classes="xs:py-3 sm:py-3 md:py-3 xl:py-3 lg:py-3 mt-8" />
}

export default SalvarFormButton