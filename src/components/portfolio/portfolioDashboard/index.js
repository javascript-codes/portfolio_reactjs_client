import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import axios from "axios";
import {PORTFOLIO_API_URL} from "../../../constants";

export default (props) => {
    const {id} = useParams();

    const [portfolio, setPortfolio] = useState({});

    useEffect(() => {
        get(`${PORTFOLIO_API_URL}/${id}`)
    }, [id]);

    const get = async (restUrlQuery) => {
        try {
            const {data} = await axios.get(restUrlQuery);
            setPortfolio(data);
        } catch (e) {
            console.error(e);
        }
    };


    return <><h2>portfolio : {portfolio.name}</h2>
        created :{portfolio.createdAt}
        updated :{portfolio.updatedAt}
        })}
    </>;
}