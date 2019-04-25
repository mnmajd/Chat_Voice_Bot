import { HistoryServices } from '../../services/HistoryServices'
import { history } from '../../helpers/index';

export function getHistory() {
    return dispatch => {
        let apiEndpoint = '/history';
        HistoryServices.getHistory(apiEndpoint)
            .then((response)=>{
                if (response) {
                    console.log(response.data.data)
                    dispatch(Get_History(response));
                }
            })
    };
}


function Get_History(response){
    return{
        type: "GET_HISTORY",
        payload: response.data.data
    }
}