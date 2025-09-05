import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { useSnackbar } from "notistack";
import { API_ROOT } from "../apiRoot";

const OrderView = ({ sample }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const user = useSelector((state) => state.user);

  const [lgShow, setLgShow] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Debug: confirm the sample coming in
  useEffect(() => {
    if (!sample) {
      enqueueSnackbar("Sample details failed to load.", { variant: "error" });
    }
  }, [sample, enqueueSnackbar]);

  const createDoctorOrder = () => {
    const token = localStorage.getItem("auth_token");
    if (!token) {
      enqueueSnackbar("Please log in first.", { variant: "error" });
      navigate("/login");
      return;
    }
    if (!sample || !sample.id) {
      enqueueSnackbar("Missing sample information.", { variant: "error" });
      return;
    }

    const payload = {
      doctor_order: {
        quantity: "1 First Dose",
        sample_id: Number(sample.id),
      },
    };

    console.log("[OrderView] POST payload =>", payload);
    setSubmitting(true);

    fetch(`${API_ROOT}/doctor_orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Auth-Token": token, 
      },
      body: JSON.stringify(payload),
    })
      // Safely parse JSON and carry along status/ok
      .then((res) =>
        res
          .json()
          .catch(() => ({}))
          .then((data) => ({ ok: res.ok, status: res.status, data }))
      )
      .then(({ ok, status, data }) => {
        console.log("[OrderView] API response =>", { status, data });
        if (ok && data.doctor_order) {
          dispatch({
            type: "RENDER_NEW_DOCTOR_ORDER",
            newOrder: data.doctor_order,
          });
          enqueueSnackbar(
            data.success_message || "Your order has been placed!",
            { variant: "success" }
          );
          setLgShow(false);
          navigate("/your-doses");
        } else {
          enqueueSnackbar(
            data.message || `Order failed (${status})`,
            { variant: "error" }
          );
        }
      })
      .catch((err) => {
        enqueueSnackbar(`Sorry, there was an error: ${err}`, {
          variant: "error",
        });
      })
      .finally(() => setSubmitting(false));
  };

  const {
    professional_title,
    first_name,
    last_name,
    address_1,
    address_2,
    city,
    state,
    zipcode,
  } = user || {};

  return (
    <div className="order-form-container">
      <Button
        variant="primary"
        className="btn-primary"
        id="place-order-button"
        onClick={() => setLgShow(true)}
        disabled={!sample}
      >
        Place Order
      </Button>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="modal-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-title">Order Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Order will be sent to:</h5>
          <div className="modal-doc-info" style={{ marginBottom: 12 }} />
          {professional_title} {first_name} {last_name}
          <br />
          {address_1}
          {address_2 ? (
            <>
              <br />
              {address_2}
            </>
          ) : null}
          <br />
          {city} {state}, {zipcode}
          <br />
          <div style={{ marginTop: 16 }}>
            <Button onClick={createDoctorOrder} disabled={submitting || !sample}>
              {submitting ? "Submitting..." : "Submit Order"}
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default OrderView;
