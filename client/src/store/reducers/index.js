import { combineReducers } from 'redux';
import { authentication } from './auth.reducer';
import {aftersalesreducer} from "./afterSales.reducer";
import { claimreducer } from './claim.reducer';
import { offersreducer } from './offer.reducer';
import { servicesreducer } from './service.reducer';
const rootReducer = combineReducers({
    authentication,
    aftersalesreducer,
    claimreducer,
    offersreducer,
    servicesreducer
});

export default rootReducer;
