import React from "react";
import HomeContainer from "../containers/homeContainer";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AddPortfolio from "../components/portfolio/addPortfolio";
import About from "../components/about";
import Legals from "../components/legals";
import Contact from "../components/contact";

export default class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link to="/legals">Legals</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/add_portfolio">
                            <AddPortfolio/>
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