const initialState = { Claims: [] ,ClaimAdded: false}
export function ClaimReducer(state = initialState, action) {
    console.log(" ACTIONNN"+action.payload)
    switch (action.type) {
        case 'GET_CLAIMS':
        return {
            ...state,
            Claims : action.payload.data
        };
        case 'CLAIM_SUCCESS_ADD':
            return {
                ...state,
                ClaimAdded : true
            };

        default:
            console.log(" DEFAULT"+state)
            return state
    }
}