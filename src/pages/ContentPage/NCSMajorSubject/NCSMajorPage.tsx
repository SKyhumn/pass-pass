import { useNavigate } from "react-router-dom";

import type { Subject } from "../../../types/Subject";

import StudyingPageHeader from "../../../components/Study/StudyingPageHeader";
import StudyCardGrid from "../../../components/Study/StudyCardGrid";

const majorSubjects: Subject[] = [
    { id: 1, title: "회계·세무", totalQuestions: 3 },
    { id: 2, title: "금융·보험", totalQuestions: 3 },
    { id: 3, title: "홍보·마케팅", totalQuestions: 3 },
    { id: 4, title: "인사·노무", totalQuestions: 3 },
    { id: 5, title: "IT·정보보안", totalQuestions: 3 },
    { id: 6, title: "생산·제조", totalQuestions: 3 },
];


export default function NCSMajorPage() {
    const navigate = useNavigate();

    const handleClickStudy = (subject: Subject) => {
      navigate(`/study-ncs/major/${subject.id}`);
    };

    return (
      <div className="p-6 md:p-8">
          <div className="mx-auto max-w-7xl space-y-8">

              <StudyingPageHeader 
              title="전공과목 학습"
              description="직무별 전문 지식을 학습하세요."
              />

              <StudyCardGrid
              subjects={majorSubjects}
              onClickStudy={handleClickStudy}
              />

          </div>
      </div>
    );
}