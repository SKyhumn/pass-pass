import SummaryCard from "./SummaryCard";

import progressIcon from "../../assets/schedule/progressIcon.png";
import completeIcon from "../../assets/schedule/completeIcon.png";

import type { ScheduleSummaryCardsProps } from "../../types/ScheduleSummaryCardsProps";

export default function ScheduleSummaryCards({ inProgressCount, completedCount }: ScheduleSummaryCardsProps) {
  return (
    <div className="opacity-0 grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadein">
      
      <SummaryCard
        title="진행 중"
        count={inProgressCount}
        icon={progressIcon}
        accentColor="#78C5FF"
        iconBgClass="bg-blue-100"
      />

      <SummaryCard
        title="완료"
        count={completedCount}
        icon={completeIcon}
        accentColor="#22C55E"
        iconBgClass="bg-green-100"
      />
    </div>
  );
}