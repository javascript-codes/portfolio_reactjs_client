import React from "react";
import {Link} from "react-router-dom";
import GetAllPortfolio from "../portfolio/getAllPortfolio";

export default function Home(props) {
    return (
        <div style={{
            backgroundColor: props.bgColor,
            height: '50vh'
        }}
             onCopy={props.toggleColor}>
            <h2>Home</h2>
            <Link to="/add_portfolio">Add portfolio</Link>
            <GetAllPortfolio/>
        </div>
    );
}