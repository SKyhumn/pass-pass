import QuickStartItem from "./QuickStartItem";

import ncs from "../../assets/feature/ncs.png";
import certification from "../../assets/feature/certification.png";
import calendar from "../../assets/feature/calendar.png";

export default function QuickStartGrid() {
  return (
    <div className="opacity-0 grid grid-cols-2 lg:grid-cols-3 gap-4 animate-fadein" style={{ animationDelay: "0.3s" }}>

      <QuickStartItem 
      icon={ncs} 
      title="NCS 시작" 
      bgColor="bg-blue-100"
      path="/study-ncs"
      />

      <QuickStartItem 
      icon={certification} 
      title="자격증" 
      bgColor="bg-purple-100"
      path="/study-certification"
      />

      <QuickStartItem 
      icon={calendar} 
      title="스케줄" 
      bgColor="bg-orange-100"
      path="/make-schedule"
      />

    </div>
  );
}