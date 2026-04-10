import { useNavigate } from "react-router-dom";

import type { Subject } from "../../../types/Subject";

import StudyingPageHeader from "../../../components/Study/StudyingPageHeader";
import StudyCardGrid from "../../../components/Study/StudyCardGrid";

const majorSubjects: Subject[] = [
    { id: 1, title: "모의고사1 (10분)", totalQuestions: 10 },
];


export default function NCSMockTestPage() {
    const navigate = useNavigate();

    const handleClickStudy = (subject: Subject) => {
      navigate(`/study-ncs/mock-test/${subject.id}`);
    };

    return (
      <div className="p-6 md:p-8">
          <div className="mx-auto max-w-7xl space-y-8">

              <StudyingPageHeader 
              title="모의고사"
              description="모의고사를 통해 실전을 대비해보세요"
              />

              <StudyCardGrid
              subjects={majorSubjects}
              onClickStudy={handleClickStudy}
              />

          </div>
      </div>
    );
}