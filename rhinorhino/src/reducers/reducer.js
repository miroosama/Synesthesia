const defaultState = {
  color: {},
}


export default function circleReducer(state=defaultState, action){
  switch(action.type){
    case "SELECT_COLOR":
    console.log(action)
      return {...state,
        color: action.payload
      }
    default: return state
  }
}
