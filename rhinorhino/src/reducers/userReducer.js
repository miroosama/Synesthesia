const defaultState = {
  currentUser: null
}

export default function userReducer(state = defaultState, action){
  switch(action.type){
    case "GET_USER":
    return {...state, currentUser: action.payload}
    case 'LOGOUT_USER':
    return { ...state, currentUser: {} };
    default:
    return {...state}
  }
}
