import * as types from "../constants"

const initalState = {
    name: ""
};

export default function portfolioReducer(
    state = initalState, action) {
    switch (action.type) {
        case types.CREATE_PORTFOLIO_ACTION:
            const newPortolioName = state.name;
            return {
                ...state,
                name: newPortolioName
            };
        default :
            return state;
    }
}