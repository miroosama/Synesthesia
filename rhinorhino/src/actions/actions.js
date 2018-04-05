export const selectColor = (colorSelected) => {
  return {
    type: "SELECT_COLOR",
    payload: {
      color: colorSelected ,
    }
  }
}
