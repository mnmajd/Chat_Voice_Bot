
let token = '';//localStorage.getItem('token');
let auth = '';//localStorage.getItem('auth');
const initialState = auth ? { loggedIn: true, token } : { loggedIn: false};
export function authentication(state = initialState, action) {
  switch (action.type) {
      case 'LOGIN_SUCCESS':
      return {
        ...state,
        loggedIn: true,
        token: action.payload.token
      };
    default:
      return state
  }
}