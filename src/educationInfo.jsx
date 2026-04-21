import { Fragment, useState } from "react";
import "./indentityInfo.css";

export function EducationInfo({
  onClick,
  onBack,
  schoolName,
  setSchoolName,
  title,
  setTitle,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) {
  return (
    <Fragment>
      <form className="basic-info" onSubmit={onClick}>
        <h2>Education Information</h2>
        <div className="fname">
          <label className="fname-label">School Name:</label>
          <input
            className="fname-input"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
            required
          />
        </div>
        <div className="lname">
          <label className="lname-label">Education Level:</label>
          <p className="explain">(HighSchool, Bachelor's, Master's, etc...)</p>
          <input
            className="lname-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="email">
          <label className="email-label">Start Date:</label>
          <input
            required
            type="date"
            className="email-input"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="phone-number">
          <label className="phone-number-label">End Date:</label>
          <input
            required
            type="date"
            className="phone-number-input"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="buttons">
          <button className="submit" type="submit">
            Next
          </button>
          <button className="back" onClick={onBack}>Back</button>
        </div>
      </form>
    </Fragment>
  );
}
