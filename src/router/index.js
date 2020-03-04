import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import HomeContainer from "../containers/homeContainer";
import AddPortfolioContainer from "../containers/addPortfolioContainer";
import About from "../components/about";
import Legals from "../components/legals";
import Contact from "../components/contact";
import PortfolioDashboard from "../components/portfolio/portfolioDashboard";

export default class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    [<Link to="/">Home</Link>]
                    [<Link to="/about">About</Link>]
                    [<Link to="/contact">Contact</Link>]
                    [<Link to="/legals">Legals</Link>]
                    <Switch>
                        <Route path="/dashboard">
                            <PortfolioDashboard/>
                        </Route>
                        <Route path="/add_portfolio">
                            <AddPortfolioContainer/>
                        </Route>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/contact">
                            <Contact/>
                        </Route>
                        <Route path="/legals">
                            <Legals/>
                        </Route>
                        <Route path="/">
                            <HomeContainer/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}