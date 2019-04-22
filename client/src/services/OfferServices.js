import axios from 'axios';
import config from '../config/config';
export const OfferServices = {
    getAllOffers
};


function getAllOffers(apiEndpoint){
    return axios.get(config.baseUrl+apiEndpoint).then((response)=>{
        return response;
    }).catch((err)=>{
        console.log(err);
    })
}

