const intitialState = {
  user: null,
  allSamples: [],
  selectedSample: null,
  quantity: null,
  seen: false
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
    case "SELECT_QUANTITY":
      return {...prevState, quantity: action.value}
    case "RESET_QUANTITY":
      return {...prevState, quantity: null}
    case "POP_UP":
      return {...prevState, seen: !prevState.seen}
      default:
      return prevState
  }
}

export default reducer