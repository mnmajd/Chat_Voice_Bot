import { OfferServices } from '../../services/OfferServices'
import { history } from '../../helpers/index';

export function getAllOffers() {
    return dispatch => {
        let apiEndpoint = '/offers';
        OfferServices.getAllOffers(apiEndpoint)
            .then((response)=>{
                if (response) {
                    console.log(response.data.data)
                    dispatch(Get_Offers(response));
                }
            })
    };
}

function Get_Offers(response){
    return{
        type: "GET_OFFERS",
        payload: response.data.data
    }
}