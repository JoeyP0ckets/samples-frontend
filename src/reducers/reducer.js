const intitialState = {
  user: {},
}

const reducer = (prevState=intitialState, action) => {
  switch(action.type) {
    case "LOGIN_USER":
      return {prevState, user: action.user}
    
      default:
      return prevState
  }
}

export default reducer