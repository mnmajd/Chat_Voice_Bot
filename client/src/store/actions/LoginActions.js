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
                    dispatch(setUserDetails(response));
                    history.push('/home');
                }
            })
    };
}
function setUserDetails(user){
    return{
        type: "LOGIN_SUCCESS",
        payload: { token: user.token}
    }
}