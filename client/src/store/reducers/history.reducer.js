const initialState = { History: []}
export function historyreducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_HISTORY':
            return {
                ...state,
                History : action.payload
            };

        default:
            console.log(" DEFAULT"+state)
            return state
    }
}