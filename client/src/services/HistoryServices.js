import axios from 'axios';
import config from '../config/config';
export const HistoryServices = {
    getHistory
};

function getHistory(apiEndpoint){
    return axios.get(config.baseUrl+apiEndpoint).then((response)=>{
        return response;
    }).catch((err)=>{
        console.log(err);
    })
}