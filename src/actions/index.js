import axios from "axios";

import {
    CREATE_PORTFOLIO_ACTION,
    PORTFOLIO_API_URL,
    UPDATE_COLOR
} from "../constants";

export const toggleColor = (stringColor) => {
    return dispatch => {
        return dispatch({
            type: UPDATE_COLOR,
            // payload:stringColor
        });
    }
};

export const addPortfolioAction = value => {
    return async (dispatch) => {
        try {
            dispatch({
                type: CREATE_PORTFOLIO_ACTION,
                payload: await addPortfolioPayload()
            })
        } catch (e) {
            console.error(e)
        }
    };

    async function addPortfolioPayload() {
        return await axios.post(PORTFOLIO_API_URL, {name: value})
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
};