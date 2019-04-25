import { history } from '../../helpers';
import { AfterSalesServices } from '../../services/AfterSalesService'


export function getAllAfterSales() {
    return dispatch => {
        let apiEndpoint = '/afterSales';
        AfterSalesServices.getAllAfterSales(apiEndpoint)
            .then((response)=>{
                if (response) {
                    console.log("huni zeda"+response.data)
                    dispatch(Get_AfterSales(response));
                }
            })
    };

}

export function AddNewAfterSale( Title , Content,Type) {
    return dispatch => {
        let apiEndpoint = '/afterSales';
        let payload = {
            Title: Title,
            Content: Content,
            Type:Type
        }
        AfterSalesServices.AddNewAfterSale(apiEndpoint , payload)
            .then((response)=>{
                console.log(response)
                if (response) {
                    dispatch(AfterSalesAddeed(response));
                }
            })
    };

}


function Get_AfterSales(response){
    return{
        type: "GET_AFFTERSALES",
        payload: response.data
    }
}
function AfterSalesAddeed(response){
    return{
        type: "ADD_AFFTERSALES"
    }
}
