import {UPDATE_COLOR} from "../constants";

export const toggleColor = (stringColor) => {
    return dispatch => {
        return dispatch({
            type: UPDATE_COLOR,
            // payload:stringColor
        });
    }
};


// export const logginAction = values => {
//     return dispatch => {
//         return fetch("/api/auth/login", {
//             method: "POST",
//             body: JSON.stringify(values),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         })
//             .then(res => {
//                 dispatch(getUserAction());
//             })
//             .catch(err => {
//                 console.error(err);
//                 alert("Error logging in please try again");
//             });
//     };
// };
