import React from "react"
import { Link } from "react-router-dom"
import { HOME } from "../../../constants/routes"

const Título = () => {
    return <Link to={HOME.link}
        className="mr-16 w-1/3
                            xs:text-base xs:ml-2 xs:mr-1 xs:w-full
                            sm:text-base sm:ml-3 sm:mr-2 sm:w-2/5 
                            md:text-base md:ml-3 md:mr-2 md:w-2/5 
                            lg:text-base lg:ml-4 md:mr-4 lg:w-1/4
                            font-helvetica font-bold text-3xl 
                            text-center leading-snug text-brand">
        CODE for Pantanal
        </Link>
}

export default Título