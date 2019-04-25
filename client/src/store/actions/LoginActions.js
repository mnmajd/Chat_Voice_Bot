import { userService } from '../../services/UserServices'
import { history } from '../../helpers';

export function login(username, password){

    return dispatch => {
        let apiEndpoint = '/users/login';
        let payload = {
            username: username,
            password: password
        }
        userService.login(apiEndpoint, payload)
            .then((response)=>{
                if (response) {
                    localStorage.setItem('token', response.token);
                    console.log(response.token)
                    dispatch(setUserDetails(response));
                    history.push('/home');
                }
            })
    };
}
export function register(username,password,firstname,lastname,Email,Phone,City,Country,Postal_code) {
    return dispatch => {
        let apiEndpoint = '/users/signup';
        let payload = {
            username: username,
            password:password,
            FirstName: firstname,
            LastName : lastname,
            Email :Email,
            Phone :Phone,
            City : City,
            Country : Country,
            Postal_code :Postal_code
        }
        userService.register(apiEndpoint, payload)
            .then((response)=>{
                console.log('this is register'+payload)
                if (response) {
                    dispatch(setUserRegistered());
                    history.push('/home');
                }
            })
    };

    
}
export function logout(){
    return dispatch => {
        localStorage.removeItem('token');
        dispatch(logoutUser());
        history.push('/');
    }
}

function setUserDetails(user){
    return{
        type: "LOGIN_SUCCESS",
        payload: { token: user.token}
    }
}

 function logoutUser(){
    return{
        type: "LOGOUT_SUCCESS",
        token: ''
    }
}


function setUserRegistered(){
    return{
        type: "Registered_sucess"
    }
}