import { combineReducers } from 'redux';
import { authentication } from './auth.reducer';
import {aftersalesreducer} from "./afterSales.reducer";
import { claimreducer } from './claim.reducer';

const rootReducer = combineReducers({
    authentication,
    aftersalesreducer,
    claimreducer
});

export default rootReducer;
