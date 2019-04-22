const initialState = { Claims: [] ,ClaimAdded: false}
export function claimreducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_CLAIMS':
        return {
            ...state,
            Claims : action.payload
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