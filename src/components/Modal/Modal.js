import React from "react";
import "./Modal.scss";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => (
  <div className="align">
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div
      className="modal"
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
      }}
    >
      <div className="modal__text">
        <h2 className="modal__text--main">Thank you!</h2>
        <span className="modal__text--secondary">
          We'll get back to you within 1 - 2 business days.
        </span>
      </div>
      <button className="button" onClick={props.modalClosed}>
        Close
      </button>
    </div>
  </div>
);

export default Modal;
