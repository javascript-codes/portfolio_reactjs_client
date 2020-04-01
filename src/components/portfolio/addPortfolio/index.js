import React, {useState} from "react";
import * as yup from 'yup';
import {
    PORTFOLIO_NAME_CONSTRAINT_MAX_SIZE,
    PORTFOLIO_NAME_CONSTRAINT_MIN_SIZE
} from "../../../constants";

const AddPortfolio = props => {

    // let addPortfolioValidationSchema = yup
    //     .object().string().shape({
    //         portfolioName: yup.string()
    //             .min(PORTFOLIO_NAME_CONSTRAINT_MIN_SIZE,
    //                 `Le nom du portfolio doit avoir au minimum ${PORTFOLIO_NAME_CONSTRAINT_MIN_SIZE} caractères`)
    //             .max(PORTFOLIO_NAME_CONSTRAINT_MAX_SIZE,
    //                 `Le nom du portfolio doit avoir au maximim ${PORTFOLIO_NAME_CONSTRAINT_MAX_SIZE} caractères`)
    //             .required()
    //
    //     });

    const addPortfolioValidationSchema = yup
        .object().shape({
            portfolioName: yup.string()
                .min(1,
                    `Le nom du portfolio doit avoir au minimum 1 caractère`)
                .max(32,
                    `Le nom du portfolio doit avoir au maximim 32 caractères`)
                .required("Le nom du portfolio est obligatoire")

        });

    const [name, setName] = useState("");
    const onSubmit = event => {
        event.preventDefault();
        props.addPortfolioAction(name);
    };
    return (
        <>
            <h2>Add Portfolio</h2><br/>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Saisir un nom"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                    required/>
                <input type="submit" value="créer"/>
            </form>
        </>
    );
};
export default AddPortfolio;