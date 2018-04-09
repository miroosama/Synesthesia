const defaultState = {
  foodPlaces: []
}

export default function foodToPlace(state=defaultState, action){
  switch(action.type){
    case "ADD_FOODPLACE":
    console.log(action)
    return Object.assign({}, state, {foodPlaces: state.foodPlaces.concat(action.payload)})
    default:
    return state;
    }
  }
