import axios from 'axios';
import config from '../config/config';
export const ClaimServices = {
    sendClaim,
    getAllClaims,
    getClaimById,
    treatClaim,
    geolocation
};

function geolocation(apiEndpoint){
    return axios.get(config.baseUrl+apiEndpoint).then((response)=>{
        return response;
    }).catch((err)=>{
        console.log(err);
    })
}


function sendClaim(apiEndpoint, payload){
    return axios.post(config.baseUrl+apiEndpoint, payload).then((response)=>{
        return response;
    }).catch((err)=>{
        console.log(err);
    })
}

function getAllClaims(apiEndpoint){
    return axios.get(config.baseUrl+apiEndpoint).then((response)=>{
        return response;
    }).catch((err)=>{
        console.log(err);
    })
}

function getClaimById(apiEndpoint){
    return axios.get(config.baseUrl+apiEndpoint).then((response)=>{
        return response;
    }).catch((err)=>{
        console.log(err);
    })
}
function treatClaim(apiEndpoint,payload){
    return axios.put(config.baseUrl+apiEndpoint,payload).then((response)=>{
        return response;
    }).catch((err)=>{
        console.log(err);
    })
}