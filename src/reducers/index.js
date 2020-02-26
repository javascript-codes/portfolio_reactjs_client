import {combineReducers} from "redux";
import color from "./color";

const rootReducer = combineReducers({
    color: color
});
export default rootReducer;