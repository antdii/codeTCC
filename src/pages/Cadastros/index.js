import React from "react"
import CadastreSeForm from "../../components/features/CadastreSeForm"
import { useParams } from "react-router-dom";
import CadastreSugestaoForm from "../../components/features/CadastreSugestaoForm";


const Cadastros = () => {
    let { tipo } = useParams()
    if(tipo === "usuario"){
        return (
            <div className="xs:pt-8 flex items-center align-center justify-center bg-gray-900">
                <CadastreSeForm />
            </div>
            )}
    return (
        <div className="xs:pt-8 flex items-center align-center justify-center bg-gray-900">
            <CadastreSugestaoForm />
        </div>
        )
}
export default Cadastros