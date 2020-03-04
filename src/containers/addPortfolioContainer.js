import {connect} from "react-redux";
import {addPortfolioAction} from "../actions";
import AddPortfolio from "../components/portfolio/addPortfolio";
import {withRouter} from 'react-router-dom'

const mapStateToProps = (state) => {
    return state;
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addPortfolioAction: (name) =>
            dispatch(addPortfolioAction(name,ownProps))
    }
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddPortfolio));