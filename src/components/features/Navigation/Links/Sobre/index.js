import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { SOBRE } from "../../../../../constants/routes"
import Menu from "./Menu"

const SobreLink = () => {
    const [visible, setVisible] = useState(false)

    const displayMenu = () => {
        setVisible(true)
    }
    const hideMenu = () => {
        setVisible(false)
    }
    return <div className="block"
        onMouseLeave={hideMenu}>
        <NavLink
            to={SOBRE.link}
            className="xl:mr-6 sm:mr-8 md:mr-8 mr-4"
            activeClassName="cursor-pointer text-orange-400"
            onMouseOver={displayMenu}
        >
            {SOBRE.name}
        </NavLink>
        <Menu isVisible={visible} />
    </div>
}
export default SobreLink