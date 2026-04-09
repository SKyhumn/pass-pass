import NavItem from "../NavItem";

import home from "../../../assets/nav-images/home-unselected.png";
import homeActive from "../../../assets/nav-images/home-selected.png";

import ncs from "../../../assets/nav-images/ncs-unselected.png";
import ncsActive from "../../../assets/nav-images/ncs-selected.png";

import certification from "../../../assets/nav-images/certification-unselected.png";
import certificationActive from "../../../assets/nav-images/certification-selected.png";

import schedule from "../../../assets/nav-images/calendar-unselected.png";
import scheduleActive from "../../../assets/nav-images/calendar-selected.png";

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white flex justify-around py-2 lg:hidden">
      <NavItem icon={home} activeIcon={homeActive} label="홈" path="/main"/>
      <NavItem icon={ncs} activeIcon={ncsActive} label="NCS" path="/study-ncs"/>
      <NavItem icon={certification} activeIcon={certificationActive} label="자격증" path="/study-certification"/>
      <NavItem icon={schedule} activeIcon={scheduleActive} label="스케줄" path="/make-schedule"/>
    </div>
  );
}