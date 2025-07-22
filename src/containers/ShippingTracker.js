import React from "react"
import { connect } from "react-redux"
import { Table } from "react-bootstrap"
import dateFormat from "dateformat"

const ShippingTracker = (props) => {
    let signedOrders = props.doctorOrders.filter(order => {
      return order.order_sent === true;
    });
    
    let sortedSignedOrders = signedOrders.sort((a, b) => b.status_datetime.localeCompare(a.status_datetime)) 

  const handleOrderClick = (selectedOrder) => {
    props.selectOrder(selectedOrder);
  }

  return(
    <div className='shipping-table-scrollable-container'>
          <Table striped bordered hover variant="light" id="shipping-table">
            <thead style={{ position: "sticky", top: "0" }}>
              <tr>
                <th>Sample Name</th>
                <th>Quantity</th>
                <th>Date Ordered</th>
                <th>Delivered</th>
              </tr>
            </thead>
            <tbody>
              {sortedSignedOrders.map((order) => (
                  <tr key={order.id} onClick={() => handleOrderClick(order)}>
                    <td>{order.sample.sample_name}</td>
                    <td>{order.quantity} {order.quantity === 1 ? "dose" : "orders"}</td>
                    <td>{dateFormat(order.status_datetime, "mmm d, yyyy")}</td>
                    <td style={{ textAlign: "center" }}>
                     {order.tracking_status?.toLowerCase() === "delivered" ? (
                       <span style={{ color: "green", fontSize: "1.2rem" }}>&#10003;</span>
                     ) : (
                      <span style={{ color: "red", fontSize: "1.2rem" }}>&#10007;</span>
                     )}
                   </td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </div>
  )
}

const msp = state => {
  return {
    doctorOrders: state.doctorOrders,
    user: state.user,
  }
}

const mdp = dispatch => {
  return {
    selectOrder: (selectedOrder) => dispatch({type:"SELECT_ORDER", selectedOrder:selectedOrder})
  }
}

export default connect(msp,mdp)(ShippingTracker)