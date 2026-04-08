import FeatureCard from "./FeatureCard";

import ncs from "../../assets/ncs.png";
import certification from "../../assets/certification.png";
import coverLetter from "../../assets/cover letter.png";
import calendar from "../../assets/calendar.png";

export default function FeatureGrid() {
    return (
        <div className="opacity-0 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-md animate-fadein" style={{ animationDelay: "0.3s" }}>
            <FeatureCard icon={ncs} title="NCS 학습" desc="필수·전공 과목" bgColor="bg-blue-100" />
            <FeatureCard icon={certification} title="자격증" desc="직무별 준비" bgColor="bg-purple-100" />
            <FeatureCard icon={coverLetter} title="자소서" desc="AI 피드백" bgColor="bg-green-100" />
            <FeatureCard icon={calendar} title="스케줄" desc="학습 일정" bgColor="bg-orange-100" />
        </div>
    );
}