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

export const shapeTime = (time) => {
  return{
    type: "ADD_TIME",
    payload: time
  }
}

export const signUp = (username, password, birthplace, age, history) => {
  return function(dispatch){
    fetch("http://localhost:3000/api/v1/signup", {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({username, password, birthplace, age})
    })
    .then(res => res.json())
    .then(response => {
      localStorage.setItem("token", response.jwt)
      dispatch({
        type: "GET_USER",
        payload: response.user
      }, history.push('/circles'))
    })
  }
}

export const logIn = (username, password, history) => {
  return function(dispatch){
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({username, password})
    })
    .then(res => res.json())
    .then(response => {
      if (response.error){
        alert(response.error)
      } else {
        console.log(response)
      localStorage.setItem("token", response.jwt)
      dispatch({
        type: "GET_USER",
        payload: response.user
      }, history.push('/circles'))
      }
    })
  }
}
