import { combineReducers } from 'redux';
import { authentication } from './auth.reducer';
import { ClaimReducer } from './claim.reducer';
const rootReducer = combineReducers({
    authentication,
    ClaimReducer
});

export default rootReducer;
