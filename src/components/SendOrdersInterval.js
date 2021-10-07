import { useEffect } from "react"

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
  
      fetch(`http://localhost:3000/api/v1/doctor_orders/send_warehouse_emails`, fetchObj)
      return null;
    }, 60000);
    return () => clearInterval(interval)
  }, []);

  
  return (
    null
  )
}

export default SendOrdersInterval