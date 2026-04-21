import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BasicInfo } from "./identityInfor.jsx";
import { EducationInfo } from "./educationInfo.jsx";
import { WorkInfo } from "./workInfo.jsx";
import { ShowCV } from "./showCV.jsx";
import { Main } from "./mainComponent.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main />
  </StrictMode>,
);
