import * as types from "../constants"

const initalState = {
    name: "",
    isPortfolioCreated: false
};

export default function portfolioReducer(
    state = initalState, action) {
    switch (action.type) {
        case types.CREATE_PORTFOLIO_ACTION:
            const newPortfolioName = state.name;
            return {
                ...state,
                name: newPortfolioName,
                isPortfolioCreated: true
            };
        default :
            return state;
    }
}