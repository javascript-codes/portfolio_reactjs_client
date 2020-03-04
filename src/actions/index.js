import axios from "axios";
import {CREATE_PORTFOLIO_ACTION, HTTP_HEADER_THE_TIMEZONE_IANA, PORTFOLIO_API_URL, UPDATE_COLOR} from "../constants";


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
                // if(response.status===){
                // browserHistory.
                // }
            })
            .catch(function (error) {
                console.log(error);
            });
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