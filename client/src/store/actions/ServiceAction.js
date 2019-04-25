import { history } from '../../helpers/index';
import {ServiceService} from "../../services/ServiceService";


export function getAllServices() {
    return dispatch => {
        let apiEndpoint = '/services';
        ServiceService.getAllServices(apiEndpoint)
            .then((response)=>{
                if (response) {
                    console.log(response.data.data)
                    dispatch(Get_Services(response));
                }
            })
    };
}


export function addService(Title,Description, Code,Type,Offer){
    return dispatch => {
        let apiEndpoint = '/services';
        let payload = {
            Title: Title,
            Description: Description,
            Code: Code,
            Type: Type,
            Offer: Offer
        }
        ServiceService.addService(apiEndpoint, payload)
            .then((response)=>{
                console.log(response)
                if (response) {
                    dispatch(ServiceAdded(response));
                }
            })
            .catch(
                console.log("error")
            )
    };
}


export function getServiceById(idService) {
    return dispatch => {
        let apiEndpoint = '/services/'+idService;
        ServiceService.getServiceById(apiEndpoint)
            .then((response)=>{
                if (response) {
                    console.log(response.data.data)
                    dispatch(Get_ServiceById(response));
                }
            })
    };
}

function ServiceAdded(response) {
    return{
        type: "SERVICE_ADDED"
    }
}
function Get_Services(response){
    return{
        type: "GET_SERVICES",
        payload: response.data.data
    }
}
function Get_ServiceById(response){
    return{
        type: "GET_SERVICEBYID",
        payload: response.data.data
    }
}