import { useNavigate } from "react-router-dom";

import NavItem from "../NavItem";

import logo from "../../../assets/logo/logo2.png";

import home from "../../../assets/nav-images/home-unselected.png";
import homeActive from "../../../assets/nav-images/home-selected.png";

import ncs from "../../../assets/nav-images/ncs-unselected.png";
import ncsActive from "../../../assets/nav-images/ncs-selected.png";

import certification from "../../../assets/nav-images/certification-unselected.png";
import certificationActive from "../../../assets/nav-images/certification-selected.png";

import coverLetter from "../../../assets/nav-images/cover letter-unselected.png";
import coverLetterActive from "../../../assets/nav-images/cover letter-selected.png";

import schedule from "../../../assets/nav-images/calendar-unselected.png";
import scheduleActive from "../../../assets/nav-images/calendar-selected.png";

export default function Sidebar() {
  const nav = useNavigate();

  const goMainPage = () => nav('/main');

  return (
    <div className="hidden lg:flex flex-col w-60 h-screen bg-white p-4 fixed left-0 top-0">
      <img src={logo} onClick={goMainPage} className="w-60 mb-5 cursor-pointer"/>
      <NavItem icon={home} activeIcon={homeActive} label="홈" path="/main"/>
      <NavItem icon={ncs} activeIcon={ncsActive} label="NCS" path="/study-ncs"/>
      <NavItem icon={certification} activeIcon={certificationActive} label="자격증" path="/study-certification"/>
      <NavItem icon={coverLetter} activeIcon={coverLetterActive} label="자소서" path="/check-coverletter"/>
      <NavItem icon={schedule} activeIcon={scheduleActive} label="스케줄" path="/make-schedule"/>
    </div>
  );
}