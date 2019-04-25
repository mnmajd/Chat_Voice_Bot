import { ClaimServices } from '../../services/ClaimServices'
import { history } from '../../helpers/index';

export function getAllClaims() {
    return dispatch => {
        let apiEndpoint = '/claims/all';
        ClaimServices.getAllClaims(apiEndpoint)
            .then((response)=>{
                if (response) {
                    console.log(response.data.data)
                    dispatch(Get_Claims(response));
                }
            })
    };
}

export function geolocation() {
    return dispatch => {
        let apiEndpoint = '/leaflet';
        ClaimServices.geolocation(apiEndpoint)
            .then((response)=>{
                if (response) {
                    console.log(response.data)
                    dispatch(Get_Location(response));
                }
            })
    };
}



export function getClaimById(idClaim) {
    return dispatch => {
        let apiEndpoint = '/claims/getById/'+idClaim;
        ClaimServices.getClaimById(apiEndpoint)
            .then((response)=>{
                if (response) {
                    console.log(response.data.data)
                    dispatch(Get_ClaimById(response));
                }
            })
    };
}


export function treatClaim(change,idClaim) {
    return dispatch => {
        let apiEndpoint = '/claims/'+idClaim;
        let payload = {
            change: change
        }
        ClaimServices.treatClaim(apiEndpoint, payload)
            .then((response)=>{
                console.log(response)
                if (response) {
                    dispatch(ClaimTreated(response));
                }
            })
            .catch(
                console.log("error")
            )
    };
}

export function sendClaim(Title,Content, Type,Degre){
    return dispatch => {
        let apiEndpoint = '/claims';
        let payload = {
            Title: Title,
            Content: Content,
            Type: Type,
            Degre: Degre
        }
        ClaimServices.sendClaim(apiEndpoint, payload)
            .then((response)=>{
                console.log(response)
                if (response) {
                    dispatch(ClaimAdded(response));
                }
            })
            .catch(
                console.log("error")
            )
    };
}

function Get_Claims(response){
    return{
        type: "GET_CLAIMS",
        payload: response.data.data
    }
}
function ClaimAdded(res){
    return{
        type: "CLAIM_SUCCESS_ADD"
    }
}
function ClaimTreated(res){
    return{
        type: "CLAIM_SUCCESS_TREATED"
    }
}
function Get_ClaimById(response){
    return{
        type: "GET_CLAIMBYID",
        payload: response.data.data
    }
}

function Get_Location(response){
    return{
        type: "GET_LOCATION",
        payload: response.data
    }
}