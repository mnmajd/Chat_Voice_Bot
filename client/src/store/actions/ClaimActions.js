import { ClaimServices } from '../../services/ClaimServices'
import { history } from '../../helpers/index';

export function getAllClaims() {
    return dispatch => {
        let apiEndpoint = '/claims/allTT';
        ClaimServices.getAllClaims(apiEndpoint)
            .then((response)=>{
                // if (response) {
                    console.log('OKKKKKKKKKKK '+response.data)
                    dispatch(Get_Claims(response));
                // }
            })
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
        payload: response.data
    }
}
function ClaimAdded(res){
    return{
        type: "CLAIM_SUCCESS_ADD"
    }
}


