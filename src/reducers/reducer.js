const initialState = {
  user: null,
  doctorOrders: [],
  allSamples: [],
  selectedSample: null,
  selectedOrder: null,
  quantity: null,
  seen: false
}
//create a reducer combiner that looks if there is a user, if there isn't a user, reset all state values to prevState 
const reducer = (prevState=initialState, action) => {
  switch(action.type) {
    case "LOGIN_USER":
      return {...prevState, user: action.user}
    case "LOGOUT_USER":
      return {...prevState, user: null}
    case "GET_ALL_SAMPLES":
      return {...prevState, allSamples: action.allSamples}
    case "GET_DOCTOR_ORDERS":
      return {...prevState, doctorOrders: action.doctorOrders}
    case "CLEAR_DOCTOR_ORDERS":
      return {...prevState, doctorOrders: []}
    case "SELECT_SAMPLE":
      return {...prevState, selectedSample: action.selectedSample}
    case "RENDER_NEW_DOCTOR_ORDER":
      return {...prevState, doctorOrders: [...prevState.doctorOrders, action.newOrder]} 
    case "SELECT_QUANTITY":
      return {...prevState, quantity: action.value}
    case "RESET_QUANTITY":
      return {...prevState, quantity: null}
    case "SELECT_ORDER":
      return {...prevState, selectedOrder: action.selectedOrder}
     default:
    return prevState
  }
}

export default reducer