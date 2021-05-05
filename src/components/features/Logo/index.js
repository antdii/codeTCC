import React from "react"
import { Link } from "react-router-dom"
import { HOME } from "../../../constants/routes"

import onçaLogo from '../../../assets/onça.png';

const Logo = () => (
    <Link to={HOME.link} className="font-bold text-white text-2xl ">
        <span className="flex flex-col bg-brand w-26 h-26 
                            rounded-full justify-center items-center text-center cursor-pointer">
            <img src={onçaLogo} alt="CfP"/>
        </span>
    </Link>)

export default Logo