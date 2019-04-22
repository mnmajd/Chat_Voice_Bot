const initialState = { AfterSales: [] , AfterSalesAdded: false}
export function aftersalesreducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_AFFTERSALES':
            return {
                ...state,
                AfterSales : action.payload.data
            };

        case 'ADD_AFFTERSALES':
            return {
                ...state,
                AfterSalesAdded : true
            };
        default:
            return state
    }
}
