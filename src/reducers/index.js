import {combineReducers} from "redux";
import colorReducer from "./colorReducer";
import portfolioReducer from "./portfolioReducer";

const rootReducer = combineReducers({
    color: colorReducer,
    portfolio:portfolioReducer
});

export default rootReducer;