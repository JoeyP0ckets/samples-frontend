import React from "react"
import dateFormat from "dateformat"
import { Table} from 'react-bootstrap'
import { connect } from 'react-redux'




const ContractsTable = (props) => {
  
  const displayStatus = (status) => {
    const normalizedStatus = status.toLowerCase();
  
    const statusMap = {
      "awaiting signature": "Contract requested",
      "signature request viewed": "Action pending",
      "signature request declined": "Declined by doctor",
      "signature request all signed": "Contract signing completed",
    };
  
    // Use backticks for the special case
    if (normalizedStatus === "signature request sent") {
      return `Contract request sent to ${props.user.email}`;
    }
  
    return statusMap[normalizedStatus] || status;
  };

  let sortedOrders = props.doctorOrders.sort((a, b) => b.status_datetime.localeCompare(a.status_datetime));
  
  return(
    <Table striped bordered hover variant="light" id="contract-table">
            <thead style={{ position: "sticky", top: "0" }}>
              <tr>
                <th>Quantity</th>
                <th>Sample Name</th>
                <th>Status</th>
                <th>Last Activity Date</th>
              </tr>
            </thead>
            <tbody>
              {
                sortedOrders.map((dose) => (
                  <tr key={dose.id}>
                    <td>{dose.quantity} {dose.quantity === 1 ? "dose" : "doses"}</td>
                    <td>{dose.sample.sample_name}</td>
                    <td>{displayStatus(dose.status)}</td>
                    <td>{dateFormat(dose.status_datetime, "mmm d, yyyy")}</td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
  )
}

const msp = state => {
  return{
    doctorOrders: state.doctorOrders,
    user: state.user
    
  }
}

export default connect(msp)(ContractsTable);