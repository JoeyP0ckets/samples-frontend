import React from "react"

const TestOrdersButton = () => {

  const testOrderClick = () => {
    const token = localStorage.getItem('auth_token')

    if(!token) {
      return
    }
    
    const fetchObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Auth-Token': token
      }
    }

    fetch(`http://localhost:3000/api/v1/doctor_orders/send_warehouse_emails`, fetchObj)
  }
  
  return (
    <button onClick={() => testOrderClick()}>Click Me To Send Orders</button>
  )
}

export default TestOrdersButton