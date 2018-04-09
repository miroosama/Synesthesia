export const selectColor = (colorSelected) => {
  return {
    type: "SELECT_COLOR",
    payload: {
      color: colorSelected ,
    }
  }
}


export const foodPlace = (food, place) =>{
  return{
    type: "ADD_FOODPLACE",
    payload: {
      foodPlace: {food, place}
    }
  }
}
