import React, {useState, useEffect} from 'react';

import ItemPortfolio from "../itemPortfolio";

import axios from "axios";


export default function GetAllPortfolio() {

    const restUrlQuery = process.env.REACT_APP_BASE_URL+
         process.env.REACT_APP_BASE_URL_API_PREFIX +
         process.env.REACT_APP_BASE_URL_API_RESOURCES_PORTFOLIO;

    useEffect(() => {
        getAll(restUrlQuery);
    }, []);

    const [portfolios, setPortfolios] = useState([]);

    const getAll = async (restUrlQuery) => {
        try {
            const result = await axios.get(restUrlQuery);
            console.log(result);
            setPortfolios(result.data);
            // console.log("restUrlQuery",restUrlQuery);
            console.log("process.env.REACT_APP_BASE_URL",process.env.REACT_APP_BASE_URL);
            console.log("process.env : ",process.env);
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