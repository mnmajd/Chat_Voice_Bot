import axios from 'axios';
import config from '../config/config';
export const ClaimServices = {
    sendClaim,
    getAllClaims
};

function sendClaim(apiEndpoint, payload){
    return axios.post(config.baseUrl+apiEndpoint, payload).then((response)=>{
        return response;
    }).catch((err)=>{
        console.log(err);
    })
}

function getAllClaims(apiEndpoint){
    debugger
    return axios.get(config.baseUrl+apiEndpoint).then((response)=>{
        return response;
    }).catch((err)=>{
        console.log(err);
    })
}