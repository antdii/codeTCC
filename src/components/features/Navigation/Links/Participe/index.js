import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { PARTICIPE } from "../../../../../constants/routes"
import Menu from "./Menu"

const ParticipeLink = () => {
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
            to={PARTICIPE.link}
            className="xl:mr-6 sm:mr-8 md:mr-8 mr-4"
            activeClassName="cursor-pointer text-orange-400"
            onMouseOver={displayMenu}
        >
            {PARTICIPE.name}
        </NavLink>
        <Menu isVisible={visible} />
    </div>
}
export default ParticipeLink