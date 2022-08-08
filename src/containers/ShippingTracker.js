import React from "react"
import { connect } from "react-redux"
import { Table } from "react-bootstrap"

const ShippingTracker = (props) => {
    let signedOrders = props.doctorOrders.filter(order => {
      return order.order_sent === true;
    });
    console.log(signedOrders)

  const handleOrderClick = (selectedOrder) => {
    console.log(selectedOrder)
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
              </tr>
            </thead>
            <tbody>
              {signedOrders.map((order) => (
                  <tr key={order.id} onClick={() => handleOrderClick(order)}>
                    <td>{order.sample.sample_name}</td>
                    <td>{order.quantity} {order.quantity === 1 ? "dose" : "orders"}</td>
                    <td>{order.status_datetime}</td>
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