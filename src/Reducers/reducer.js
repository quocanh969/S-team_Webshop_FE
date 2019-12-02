import { combineReducers } from "redux";

import LandingPageReducer from '../LandingPage/LandingPage.reducer';

const myReducer = combineReducers(
    {
        LandingPageReducer,
    }
)

export default myReducer;