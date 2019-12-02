import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import LandingPage from './LandingPage.component';

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

const LandingPageContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(LandingPage));

export default LandingPageContainer;