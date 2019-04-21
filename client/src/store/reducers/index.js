import { combineReducers } from 'redux';
import { authentication } from './auth.reducer';
import {aftersalesreducer} from "./afterSales.reducer";
const rootReducer = combineReducers({
    authentication,
    aftersalesreducer
});

export default rootReducer;
