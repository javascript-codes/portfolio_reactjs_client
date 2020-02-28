import {connect} from "react-redux";
import {addPortfolioAction} from "../actions";
import AddPortfolio from "../components/portfolio/addPortfolio";

const mapStateToProps = (state) => {
    return state.portfolio;
};


const mapDispatchToProps = (dispatch) => {
    return {
        addPortfolioAction: (name) =>
            dispatch(addPortfolioAction(name))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPortfolio);