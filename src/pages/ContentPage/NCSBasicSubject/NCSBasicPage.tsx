import { useNavigate } from "react-router-dom";

import type { NCSBasicSubject } from "../../../types/NCSBasicSubject";

import NCSBasicHeader from "../../../components/NCS/NCSBasic/NCSBasicHeader";
import NCSBasicSubjectGrid from "../../../components/NCS/NCSBasic/NCSBasicSubjectGrid";

const basicSubjects: NCSBasicSubject[] = [
  { id: 1, title: "의사소통능력", totalQuestions: 3 },
  { id: 2, title: "수리능력", totalQuestions: 3 },
  { id: 3, title: "문제해결능력", totalQuestions: 3 },
  { id: 4, title: "자원관리능력", totalQuestions: 3 },
  { id: 5, title: "정보능력", totalQuestions: 3 },
];


export default function NCSBasicPage() {
    const navigate = useNavigate();

  const handleClickStudy = (subject: NCSBasicSubject) => {
    navigate(`/study-ncs/basic/${subject.id}`);
  };

  return (
    <div className="p-6 md:p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <NCSBasicHeader/>
        <NCSBasicSubjectGrid
          subjects={basicSubjects}
          onClickStudy={handleClickStudy}
        />
      </div>
    </div>
  );
}