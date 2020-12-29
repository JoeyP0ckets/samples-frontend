const intitialState = {
  user: {},
}

const reducer = (prevState=intitialState, action) => {
  switch(action.type) {
    case "LOGIN_USER":
      return {prevState, user: action.payload.value}
    
      default:
      return prevState
  }
}

export default reducer