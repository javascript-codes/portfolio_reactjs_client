import axios from "axios";
import {
    CREATE_PORTFOLIO_ACTION,
    HTTP_HEADER_THE_TIMEZONE_IANA,
    MODEL_FIELD_NAME_PORTFOLIO_ID,
    PORTFOLIO_API_URL,
    REACT_ROUTE_PORTFOLIO_DASHBOARD,
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

export const addPortfolioAction = (value, ownProps) => {
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
            .then((response) => {
                console.log(response);
                const portfolioId = response.data[MODEL_FIELD_NAME_PORTFOLIO_ID];
                ownProps.history.push(`${REACT_ROUTE_PORTFOLIO_DASHBOARD}/${portfolioId}`);
            })
            .catch(error => console.log(error));
    }
};

axios.interceptors.request.use(function (config) {
    config.headers.offset = new Date().getTimezoneOffset();
    config.headers[HTTP_HEADER_THE_TIMEZONE_IANA] =
        Intl.DateTimeFormat()
            .resolvedOptions()
            .timeZone;
    return config;
});