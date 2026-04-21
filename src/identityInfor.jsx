import "./indentityInfo.css";
import "./main.css";
import { Fragment, useState } from "react";
import { EducationInfo } from "./educationInfo.jsx";

export function BasicInfo({
  onClick,
  fname,
  setFname,
  surname,
  setSurname,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
}) {

  return (
    <Fragment>
      <form className="basic-info" onSubmit={onClick}>
        <h2>Personal Information</h2>
        <div className="fname">
          <label className="fname-label">Name:</label>
          <input
            className="fname-input"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            required
          />
        </div>
        <div className="lname">
          <label className="lname-label">Surname:</label>
          <input
            className="lname-input"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
          />
        </div>
        <div className="email">
          <label className="email-label">Email:</label>
          <input
            type="email"
            className="email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="phone-number">
          <label className="phone-number-label">Phone Number:</label>
          <input
            type="tel"
            className="phone-number-input"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <button className="submit" type="submit">
          Next
        </button>
      </form>
    </Fragment>
  );
}
