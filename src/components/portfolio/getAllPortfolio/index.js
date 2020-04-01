import React, {useEffect, useState} from 'react';
import axios from "axios";
import ItemPortfolio from "../itemPortfolio";
import {PORTFOLIO_API_URL} from "../../../constants";

export default () => {
    useEffect(() => {
        getAll(PORTFOLIO_API_URL);
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
        {portfolios && portfolios.map((portfolio,i) => {
            return (<ItemPortfolio key={i} portfolio={portfolio}/>);
        })}
    </>;
}