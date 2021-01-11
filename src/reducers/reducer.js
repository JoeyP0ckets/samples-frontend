const intitialState = {
  user: {},
  allSamples: {},
  selectedSample: null,
}

const reducer = (prevState=intitialState, action) => {
  switch(action.type) {
    case "LOGIN_USER":
      return {prevState, user: action.user}
    case "GET_ALL_SAMPLES":
      return {prevState, allSamples: action.allSamples}
    case "SELECT_SAMPLE":
      return {prevState, selectedSample: action.selectedSample}
    
      default:
      return prevState
  }
}

export default reducer