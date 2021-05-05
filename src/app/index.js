import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Header from "../layouts/Header"
import { Switcher } from "../components/features/Navigation"
import HeaderMobile from "../layouts/Header/mobile"
import Footer from "../components/features/Footer"

class App extends React.Component {
    render() {
        return (<div>
            <Router >
                <Header />
                <HeaderMobile forMobile={true} />
                <Switcher />
                <Footer />
            </Router>
        </div>
        )
    }
}
export default App