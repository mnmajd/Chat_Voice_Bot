const initialState = { AfterSales: [] , AfterSalesAdded: false}
export function aftersalesreducer(state = initialState, action) {
    console.log(" huni"+action.payload)
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
