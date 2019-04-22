import { combineReducers } from 'redux';
import { authentication } from './auth.reducer';
import {aftersalesreducer} from "./afterSales.reducer";
import { claimreducer } from './claim.reducer';
import { offersreducer } from './offer.reducer';

const rootReducer = combineReducers({
    authentication,
    aftersalesreducer,
    claimreducer,
    offersreducer
});

export default rootReducer;
