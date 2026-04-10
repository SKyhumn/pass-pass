import { useNavigate } from "react-router-dom";

import type { Subject } from "../../../types/Subject";

import StudyingPageHeader from "../../../components/Study/StudyingPageHeader";
import StudyCardGrid from "../../../components/Study/StudyCardGrid";

const majorSubjects: Subject[] = [
    { id: 1, title: "품질경영기사", totalQuestions: 10 },
    { id: 2, title: "산업안전기사", totalQuestions: 10 },
    { id: 3, title: "생산자동화산업기사", totalQuestions: 10 },
];

export default function CertificationManufacturingPage() {
    const navigate = useNavigate();

    const handleClickStudy = (subject: Subject) => {
      navigate(`/study-certification/manufacturing/${subject.id}`);
    };

    return (
      <div className="p-6 md:p-8">
          <div className="mx-auto max-w-7xl space-y-8">

              <StudyingPageHeader 
              title="생산·제조"
              description="문제 풀이로 자격증 공부를 시작해 보아요."
              />

              <StudyCardGrid
              subjects={majorSubjects}
              onClickStudy={handleClickStudy}
              />

          </div>
      </div>
    );
}