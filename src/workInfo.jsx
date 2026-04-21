import { Fragment, useState } from "react";
import "./indentityInfo.css";

export function WorkInfo({
  onClick,
  onBack,
  companyName,
  setCompanyName,
  positionTitle,
  setPositionTitle,
  mainResponsibilties,
  setmainResponsibilties,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) {
  return (
    <Fragment>
      <form className="basic-info" onSubmit={onClick} id="expand">
        <h2>Work Information</h2>
        <div className="fname">
          <label className="fname-label">Company Name:</label>
          <input
            className="fname-input"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div className="lname">
          <label className="lname-label">Position Title:</label>
          <input
            required
            className="lname-input"
            value={positionTitle}
            onChange={(e) => setPositionTitle(e.target.value)}
          />
        </div>
        <div className="lname">
          <label className="lname-label">Key Responsibilties:</label>
          <input
            required
            className="lname-input"
            value={mainResponsibilties}
            onChange={(e) => setmainResponsibilties(e.target.value)}
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
          <button className="back" onClick={onBack}>
            Back
          </button>
        </div>
      </form>
    </Fragment>
  );
}
