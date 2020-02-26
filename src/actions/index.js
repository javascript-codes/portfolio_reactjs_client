import {UPDATE_COLOR} from "../constants";

export const toggleColor = (stringColor) => {
    return dispatch => {
        return dispatch({
            type: UPDATE_COLOR,
            // payload:stringColor
        });
    }
};