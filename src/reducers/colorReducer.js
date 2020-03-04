import * as types from "../constants"

const initalState = {
    foo: "foo",
    bar: "bar",
    bgColor: 'mediumaquamarine'
};

export default function colorReducer(
    state = initalState,
    action) {

    switch (action.type) {
        case types.UPDATE_COLOR:
            const newColor = state.bgColor === "hotpink" ?
                "mediumseagreen" : "hotpink";
            return {
                ...state,
                bgColor: newColor
            };
        default :
            return state;
    }
}