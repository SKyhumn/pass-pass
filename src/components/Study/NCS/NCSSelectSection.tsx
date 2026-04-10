import { BookOpen, BriefcaseBusiness, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SelectCard from "../SelectCard";

export default function NCSSelectSection() {
  const navigate = useNavigate();

  return (
    <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
      <SelectCard
        icon={<BookOpen className="h-10 w-10" />}
        title="필수과목"
        description="10개 필수 능력 학습"
        items={[
          "의사소통능력",
          "수리능력",
          "문제해결능력",
          "자원관리능력",
          "정보능력",
        ]}
        extraText="외 5개 과목"
        onClick={() => navigate("/study-ncs/basic")}
        animationDelay="0.1s"
      />

      <SelectCard
        icon={<BriefcaseBusiness className="h-10 w-10" />}
        title="전공과목"
        description="직무별 전문 지식 학습"
        items={[
          "회계·세무",
          "금융·보험",
          "마케팅·홍보",
          "인사·노무",
          "IT·정보보안",
        ]}
        extraText="외 다수 직무"
        onClick={() => navigate("/study-ncs/major")}
        animationDelay="0.2s"
      />

      <SelectCard
        icon={<FileText className="h-10 w-10" />}
        title="모의고사"
        description="종합 평가 및 실전 연습"
        items={[
          "실전 형식 모의고사",
          "시간 제한 연습",
          "상세한 결과 분석",
          "반복 학습",
        ]}
        onClick={() => navigate("/study-ncs/mock-test")}
        animationDelay="0.3s"
      />
    </section>
  );
}