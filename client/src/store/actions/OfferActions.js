import { OfferServices } from '../../services/OfferServices'
import { history } from '../../helpers/index';
import {ClaimServices} from "../../services/ClaimServices";


export function getAllOffers() {
    return dispatch => {
        let apiEndpoint = '/offers';
        OfferServices.getAllOffers(apiEndpoint)
            .then((response)=>{
                if (response) {
                    dispatch(Get_Offers(response));
                }
            })
    };
}


export function addOffer(Title,Content, Type,Duration,CodeActivation,Price){
    return dispatch => {
        let apiEndpoint = '/offers';
        let payload = {
            Title: Title,
            Content: Content,
            Type: Type,
            Duration: Duration,
            CodeActivation:CodeActivation,
            Price:Price
        }
        OfferServices.addOffer(apiEndpoint, payload)
            .then((response)=>{
                console.log(response)
                if (response) {
                    dispatch(OfferAdded(response));
                    // store.dispatch(push('/admin/offers/table'))
                    // store.r(push('/your-route'))
                    //  Router.push('/admin/offers/table')
                    // history.replace('/admin/offers/table')
                    // browse.push('/admin/offers/table');
                }
            })
            .catch(
                console.log("error")
            )
    };
}


export function getOfferById(idOffer) {
    return dispatch => {
        let apiEndpoint = '/offers/'+idOffer;
        OfferServices.getOfferById(apiEndpoint)
            .then((response)=>{
                if (response) {
                    console.log(response.data.data)
                    dispatch(Get_OfferById(response));
                }
            })
    };
}

function OfferAdded(response) {
    return{
        type: "OFFER_ADDED"
    }
}
function Get_Offers(response){
    return{
        type: "GET_OFFERS",
        payload: response.data.data
    }
}
function Get_OfferById(response){
    return{
        type: "GET_OFFERBYID",
        payload: response.data.data
    }
}