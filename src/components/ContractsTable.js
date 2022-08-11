import React from "react"
import dateFormat from "dateformat"
import { Table} from 'react-bootstrap'
import { connect } from 'react-redux'

const ContractsTable = (props) => {
  
  let sortedOrders = props.doctorOrders.sort((a, b) => b.status_datetime.localeCompare(a.status_datetime));
  
  return(
    <Table striped bordered hover variant="light" id="contract-table">
            <thead style={{ position: "sticky", top: "0" }}>
              <tr>
                <th>Quantity</th>
                <th>Sample Name</th>
                <th>Status</th>
                <th>Status Time</th>
              </tr>
            </thead>
            <tbody>
              {
                sortedOrders.map((dose) => (
                  <tr key={dose.id}>
                    <td>{dose.quantity} {dose.quantity === 1 ? "dose" : "orders"}</td>
                    <td>{dose.sample.sample_name}</td>
                    <td>{dose.status}</td>
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
    doctorOrders: state.doctorOrders
  }
}

export default connect(msp)(ContractsTable);