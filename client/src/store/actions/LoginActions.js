import { userService } from '../../services/UserServices'
import { history } from '../../helpers';
export const LoginActions = {
    login
};
function login(username, password){
    return dispatch => {
        let apiEndpoint = '/users/login';
        let payload = {
            username: username,
            password: password
        }
        userService.login(apiEndpoint, payload)
            .then((response)=>{
                console.log(response);
                if (response) {
                    localStorage.setItem('token', response.token);
                    dispatch(setUserDetails(response));
                    history.push('/home');
                }
            })
    };
}
export function setUserDetails(user){
    return{
        type: "LOGIN_SUCCESS",
        token: user.token
    }
}