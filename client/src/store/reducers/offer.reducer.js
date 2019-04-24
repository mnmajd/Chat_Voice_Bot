const initialState = { Offers: [],OfferAdded:false,Offer:{}}
export function offersreducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_OFFERS':
            return {
                ...state,
                Offers : action.payload
            };
        case 'OFFER_ADDED':
            return {
                ...state,
                OfferAdded : true
            };
        case 'GET_OFFERBYID':
            return {
                ...state,
                Offer : action.payload
            };
        default:
            return state
    }
}
