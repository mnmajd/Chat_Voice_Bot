import axios from 'axios';
import config from '../config/config';
export const AfterSalesServices = {
    getAllAfterSales,
    AddNewAfterSale
};

function getAllAfterSales(apiEndpoint){
    return axios.get(config.baseUrl+apiEndpoint).then((response)=>{
        return response;
    }).catch((err)=>{
        console.log(err);
    })
}

function AddNewAfterSale(apiEndpoint , payload){
    return axios.post(config.baseUrl+apiEndpoint ,payload).then((response)=>{
        return response;
    }).catch((err)=>{
        console.log(err);
    })
}