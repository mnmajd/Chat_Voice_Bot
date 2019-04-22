import { combineReducers } from 'redux';
import { authentication } from './auth.reducer';
import {aftersalesreducer} from "./afterSales.reducer";
import { ClaimReducer } from './claim.reducer';

const rootReducer = combineReducers({
    authentication,
    aftersalesreducer,
    ClaimReducer
});

export default rootReducer;
