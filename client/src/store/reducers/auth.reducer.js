
let token = '';//localStorage.getItem('token');
let auth = '';//localStorage.getItem('auth');
const initialState = auth ? { loggedIn: true, token ,registered : false} : { loggedIn: false ,registered : false};
export function authentication(state = initialState, action) {
  switch (action.type) {
      case 'LOGIN_SUCCESS':
      return {
        ...state,
        loggedIn: true,
        token: action.payload.token
      };
      case 'LOGOUT_SUCCESS':
          return {
              ...state,
              loggedIn: false,
              token: action.payload.token
          };
      case 'Registered_sucess':
          return {
              ...state,
              registered: true
          };

    default:
      return state
  }
}