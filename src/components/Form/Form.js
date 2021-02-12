import React, { useState } from "react";
import "./Form.scss";
import Modal from "../Modal/Modal";
import ReactFlagsSelect from "react-flags-select";

const Form = () => {
  const [selected, setSelected] = useState("");
  const [firstname, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [terms, setTerms] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => {
      window.location.reload();
    }, 200);
  };

  const openModal = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  // Disables the Send button until all the required inputs are filled
  let btn = true;
  if (firstname != "" && email != "" && company != "" && terms !== false) {
    btn = false;
  } else {
    btn = true;
  }

  // Input handlers
  const nameHandler = (event) => {
    setFirstName(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const companyHandler = (event) => {
    setCompany(event.target.value);
  };
  const termsHandler = () => {
    setTerms(!terms);
  };

  // Prevents reload when ENTER key is pressed
  const submitHandler = (event) => {
    event.key === "Enter" && event.preventDefault();
  };

  return (
    <form
      className="form"
      onKeyPress={(e) => {
        submitHandler(e);
      }}
    >
      <Modal show={showModal} modalClosed={closeModal} />
      <div className="form__cell ">
        <label for="firstname">First name*</label>
        <input
          type="text"
          name="firstname"
          value={firstname}
          onChange={nameHandler}
        />
      </div>
      <div className="form__cell ">
        <label for="lastname">Last name</label>
        <input type="text" name="lastname"></input>
      </div>

      <div className="form__cell--email ">
        <label for="email">Email*</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={emailHandler}
        />
      </div>
      <div className="form__cell bla">
        <label for="jobTitle">Job title</label>
        <input type="text" name="jobTitle"></input>
      </div>
      <div className="form__cell ">
        <label for="company">Company*</label>
        <input
          type="text"
          name="company"
          value={company}
          onChange={companyHandler}
        />
      </div>
      <div className="form__cell ">
        <label for="industry">Industry*</label>
        <select name="industry" defaultValue="Banking">
          <option className="mainOpt">Automotive</option>
          <option>Banking</option>
          <option>Consulting</option>
          <option>Finance</option>
          <option>Healthcare</option>
          <option>Medical/PR</option>
          <option>Retail</option>
          <option>Technology</option>
          <option>Telcommunication</option>
          <option>Other</option>
        </select>
      </div>
      <div className="form__cell ">
        <label for="country">Country*</label>
        <ReactFlagsSelect
          className="select"
          placeholder="N/A"
          selectedSize={16}
          optionsSize={16}
          selected={selected}
          onSelect={(code) => setSelected(code)}
          searchable
        />
      </div>
      <div className="form__cell ">
        <label for="operatingGeography">Operating geography</label>
        <select name="operatingGeography">
          <option value="" disabled selected hidden>
            N/A
          </option>
          <option>National</option>
          <option>Regional</option>
          <option>Global</option>
        </select>
      </div>
      <div className="form__cell--message">
        <label for="inquiry">What would you like to talk about?</label>
        <textarea name="inquiry"></textarea>
      </div>
      <div className="form__cell--terms">
        <label className="checkbox">
          <input
            className="box"
            type="checkbox"
            name="termsAccepted"
            value={terms}
            onClick={termsHandler}
          />
          <p>
            By submitting this form I accept{" "}
            <a href="https://www.modularbank.co/privacy-policy/" target="blank">
              privacy policy and cookie policy
            </a>
            .
          </p>
        </label>
        <label className="checkbox">
          <input className="box" type="checkbox" name="newsletter"></input>
          <p>I would like to receive your newsletter.</p>
        </label>
      </div>
      <div className="form__cell--button">
        <button
          className="btn"
          type="submit"
          disabled={btn}
          onClick={openModal}
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default Form;
