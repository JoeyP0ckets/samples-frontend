const intitialState = {
  user: {},
  allSamples: {},
}

const reducer = (prevState=intitialState, action) => {
  switch(action.type) {
    case "LOGIN_USER":
      return {prevState, user: action.user}
    case "GET_ALL_SAMPLES":
      return {prevState, allSamples: action.allSamples}
    
      default:
      return prevState
  }
}

export default reducer