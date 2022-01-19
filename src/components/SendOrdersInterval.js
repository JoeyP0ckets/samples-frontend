import { useEffect } from "react"
import { API_ROOT } from "../apiRoot";

const SendOrdersInterval = () => {
  
  const token = localStorage.getItem('auth_token')
  
  useEffect(() => {
    const interval = setInterval(() => {
      const fetchObj = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Auth-Token': token
        }
      }
  
      fetch(`${API_ROOT}/doctor_orders/send_warehouse_emails`, fetchObj)
      return null;
    }, 60000);
    return () => clearInterval(interval)
  }, []);

  
  return (
    null
  )
}

export default SendOrdersInterval