import "./showCV.css";

export function ShowCV({
  func,
  fname,
  surname,
  email,
  phoneNumber,
  companyName,
  positionTitle,
  startDate,
  endDate,
  responsibilties,
  schoolName,
  type,
  startDateV2,
  endDateV2,
}) {


  return (
    <>
      <div className="resume">
        <div className="header">
          <div className="name-and-blurb">
            <h2>
              {fname} {surname}
            </h2>
          </div>
          <div className="details">
            <p>{phoneNumber}</p>
            <p>{email}</p>
          </div>
        </div>
        <div className="experience">
          <h6>EXPERIENCE</h6>
          <div className="job">
            <p>
              <b>{companyName}</b> - <i>{positionTitle}</i>
            </p>
            <p className="dates">
              {startDate}- {endDate}
            </p>
            <p>{responsibilties}</p>
          </div>
        </div>
        <div className="education">
          <h6>Education</h6>
          <div className="education-info">
            <p>
              <b>{schoolName}</b>- <i>{type}</i>
            </p>
            <p className="education-dates">
              {startDateV2} - {endDateV2}
            </p>
          </div>
        </div>
      </div>
      <button onClick={window.print} className="back" id="download">Download</button>
      <button onClick={func} className="back" id="download">
        Back
      </button>
    </>
  );
}
