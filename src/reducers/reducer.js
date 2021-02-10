const intitialState = {
  user: null,
  allSamples: [],
  selectedSample: null,
}

const reducer = (prevState=intitialState, action) => {
  switch(action.type) {
    case "LOGIN_USER":
      return {...prevState, user: action.user}
    case "GET_ALL_SAMPLES":
      return {...prevState, allSamples: action.allSamples}
    case "SELECT_SAMPLE":
      return {...prevState, selectedSample: action.selectedSample}
    case "RENDER_NEW_SAMPLE":
      return {...prevState, user: {...prevState.user, samples: [...prevState.user.samples, action.newSample]}} 
    
      default:
      return prevState
  }
}

export default reducer