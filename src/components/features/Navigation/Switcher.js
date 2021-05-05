import React from "react"
import { Switch, Route } from "react-router-dom"
import Home, {
    SobrePage,
    NossoTrabalhoPage,
    BlogPage,
    ParticipePage,
    LoginPage,
    CadastroPage
} from "../../../pages"

const Switcher = () => (
    <Switch>
        <Route path="/sobre">
            <SobrePage />
        </Route>
        <Route path="/nosso-trabalho">
            <NossoTrabalhoPage />
        </Route>
        <Route path="/blog">
            <BlogPage />
        </Route>
        <Route path="/Participe">
            <ParticipePage />
        </Route>
        <Route path="/login">
            <LoginPage />
        </Route>
        <Route path="/cadastro/:tipo">
            <CadastroPage />
        </Route>
        <Route path="/">
            <Home />
        </Route>
    </Switch>)

export default Switcher