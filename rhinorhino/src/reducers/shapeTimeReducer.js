const defaultState = {
  shapeTime: null,
}


export default function circleReducer(state=defaultState, action){
  switch(action.type){
    case "ADD_TIME":
    console.log(action)
      return {...state,
        shapeTime: action.payload
      }
    default: return state
  }
}
