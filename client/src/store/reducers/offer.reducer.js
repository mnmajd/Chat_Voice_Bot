const initialState = { Offers: []}
export function offersreducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_OFFERS':
            return {
                ...state,
                Offers : action.payload
            };

        default:
            return state
    }
}
