const initialState = { Claims: [] ,ClaimAdded: false, Claim:{},ClaimTreated: false,Location:[] }
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
        case 'GET_CLAIMBYID':
            return {
                ...state,
                Claim : action.payload
            };
        case 'CLAIM_SUCCESS_TREATED':
            return {
                ...state,
                ClaimTreated : true
            };
        case 'GET_LOCATION':
            return {
                ...state,
                Location : action.payload
            };

        default:
            console.log(" DEFAULT"+state)
            return state
    }
}