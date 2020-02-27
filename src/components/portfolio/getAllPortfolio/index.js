// import React from "react";
import React, {useState, useEffect} from 'react';

import ItemPortfolio from "../itemPortfolio";

import axios from "axios";


export default function GetAllPortfolio() {

    const restUrlQuery = process.env.REACT_APP_BASE_URL +
        process.env.REACT_APP_BASE_URL_API_PREFIX +
        process.env.REACT_APP_BASE_URL_API_RESOURCES_PORTFOLIO;


    const urlQuery = "http://localhost:8080/api/portfolios";

    useEffect(() => {
        getAllPF(urlQuery);
    }, []);

    const [portfolios, setPortfolios] = useState([]);

    const getAllPF = async (urlQuery) => {
        try {
            const result = await axios.get(urlQuery);
            console.log(result);
            setPortfolios(result.data);
        } catch (e) {
            console.error(e);
        }
    };


    return (
        <div>
            <h2>List of your portfolio</h2><br/>
            {portfolios && portfolios.map((portfolio, i) => {
                return (<ItemPortfolio portfolio={portfolio}/>);
            })}
        </div>
    );
}