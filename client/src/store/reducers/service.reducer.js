const initialState = { Services: [],ServiceAdded:false,Service:{}}
export function servicesreducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_SERVICES':
            return {
                ...state,
                Services : action.payload
            };
        case 'SERVICE_ADDED':
            return {
                ...state,
                ServiceAdded : true
            };
        case 'GET_SERVICEBYID':
            return {
                ...state,
                Service : action.payload
            };
        default:
            return state
    }
}
