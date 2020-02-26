import {connect} from "react-redux";
import Home from "../components/home";

import {toggleColor} from "../actions";

const mapStateToProps=(state)=>{
    console.log("state: ",state);
    return state.color;
};

const mapDispatchToProps=(dispatch)=>{
    return {
        toggleColor:()=>dispatch(toggleColor())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);