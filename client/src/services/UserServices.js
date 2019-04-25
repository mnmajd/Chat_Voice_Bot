import axios from 'axios';
import config from '../config/config';
export const userService = {
    register,
    login
};

function login(apiEndpoint, payload){
    debugger
    return axios.post(config.baseUrl+apiEndpoint, payload, getOptions()).then((response)=>{
        return response;
    }).catch((err)=>{
        console.log(err);
    })
}
function register(apiEndpoint, payload){
    return axios.post(config.baseUrl+apiEndpoint, payload).then((response)=>{
        return response;
    }).catch((err)=>{
        console.log(err);
    })
}
function logout(apiEndpoint){
    return axios.post(config.baseUrl+apiEndpoint).then((response)=>{
        return response;
    }).catch((err)=>{
        console.log(err);
    })
}

function getOptions(){
    let options = {};
    if(localStorage.getItem('token')){
        options.headers = { 'x-access-token': localStorage.getItem('token') };
    }
    return options;
}