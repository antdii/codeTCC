import React from "react"
import * as ROUTES from "../../../constants/routes"
import { NavLink } from "react-router-dom"
import SobreLink from "./Links/Sobre"
import NossoTrabalhoLink from "./Links/NossoTrabalho"
import ParticipeLink from "./Links/Participe"

const Linker = () => (
    <nav>
        <ul className="flex text-white font-helvetica tracking-wide text-base xs:text-xs sm:text-sm md:text-sm justify-between xs:px-6">
            <SobreLink />
            <NossoTrabalhoLink />
            
            <li className="xl:mr-6 sm:mr-8 md:mr-8 mr-4"><NavLink to={ROUTES.BLOG.link} activeClassName="cursor-pointer text-orange-400" >{ROUTES.BLOG.name}</NavLink></li>
            <ParticipeLink />
            
        </ul>
    </nav>
)
export default Linker