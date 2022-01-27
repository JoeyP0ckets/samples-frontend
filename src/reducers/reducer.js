const intitialState = {
  user: null,
  doctorOrders: [],
  allSamples: [],
  selectedSample: null,
  quantity: null,
  seen: false
}

const reducer = (prevState=intitialState, action) => {
  switch(action.type) {
    case "LOGIN_USER":
      return {...prevState, user: action.user}
    case "LOGOUT_USER":
      return {...prevState, user: null}
    case "GET_ALL_SAMPLES":
      return {...prevState, allSamples: action.allSamples}
    case "GET_DOCTOR_ORDERS":
      debugger
      return {...prevState, doctorOrders: action.doctorOrders}
    case "SELECT_SAMPLE":
      return {...prevState, selectedSample: action.selectedSample}
    case "RENDER_NEW_DOCTOR_ORDER":
      return {...prevState, doctorOrders: [...prevState.doctorOrders, action.newOrder]} 
    case "SELECT_QUANTITY":
      return {...prevState, quantity: action.value}
    case "RESET_QUANTITY":
      return {...prevState, quantity: null}
      default:
      return prevState
  }
}

export default reducer