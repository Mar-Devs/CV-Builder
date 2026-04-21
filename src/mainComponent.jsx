import { act, Fragment, useState } from "react";
import { BasicInfo } from "./identityInfor.jsx";
import { EducationInfo } from "./educationInfo.jsx";
import { WorkInfo } from "./workInfo.jsx";
import { ShowCV } from "./showCV.jsx";

export function Main() {
  const [active, setActive] = useState(0);
  const [fname, setFname] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [schoolName, setSchoolName] = useState("");
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [mainResponsibilties, setmainResponsibilties] = useState("");
  const [startDateWork, setStartDateWork] = useState("");
  const [endDateWork, setEndDateWork] = useState("");

  console.log(`The active number is : ${active}`);

  console.log(fname, surname, email, phoneNumber);
  function changer() {
    setActive(active + 1);
    console.log(active);
  }

  function back() {
    setActive(active - 1);
  }
  return (
    <Fragment>
      {active === 0 ? (
        <BasicInfo
          onClick={changer}
          fname={fname}
          setFname={setFname}
          surname={surname}
          setSurname={setSurname}
          email={email}
          setEmail={setEmail}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
        />
      ) : (
        ""
      )}
      {active === 1 ? (
        <EducationInfo
          onClick={changer}
          onBack={back}
          schoolName={schoolName}
          setSchoolName={setSchoolName}
          title={title}
          setTitle={setTitle}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
      ) : (
        ""
      )}
      {active === 2 ? (
        <WorkInfo
          onClick={changer}
          onBack={back}
          companyName={companyName}
          setCompanyName={setCompanyName}
          positionTitle={positionTitle}
          setPositionTitle={setPositionTitle}
          mainResponsibilties={mainResponsibilties}
          setmainResponsibilties={setmainResponsibilties}
          startDate={startDateWork}
          setStartDate={setStartDateWork}
          endDate={endDateWork}
          setEndDate={setEndDateWork}
        />
      ) : (
        ""
      )}
      {active === 3 && (
        <ShowCV
          func={back}
          fname={fname}
          surname={surname}
          email={email}
          phoneNumber={phoneNumber}
          companyName={companyName}
          positionTitle={positionTitle}
          startDate={startDateWork}
          endDate={endDateWork}
          responsibilties={mainResponsibilties}
          schoolName={schoolName}
          type={title}
          startDateV2={startDate}
          endDateV2={endDate}
        />
      )}
    </Fragment>
  );
}
