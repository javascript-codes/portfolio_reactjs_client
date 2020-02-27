import React, {useEffect, useState} from 'react';

import ItemPortfolio from "../itemPortfolio";

import axios from "axios";


export default function GetAllPortfolio() {
    const portfolioUrlQuery = process.env.REACT_APP_BASE_URL+
        process.env.REACT_APP_BASE_URL_API_PREFIX +
        process.env.REACT_APP_BASE_URL_API_RESOURCES_PORTFOLIO;

    useEffect(() => {
        getAll(portfolioUrlQuery);
    }, []);

    const [portfolios, setPortfolios] = useState([]);

    const getAll = async (restUrlQuery) => {
        try {
            const {data} = await axios.get(restUrlQuery);
            setPortfolios(data);
        } catch (e) {
            console.error(e);
        }
    };

    return <><h2>List of your portfolio</h2>
        {portfolios && portfolios.map((portfolio, i) => {
            return (<ItemPortfolio portfolio={portfolio}/>);
        })}
    </>;
}