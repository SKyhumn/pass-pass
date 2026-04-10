import { BookOpen, Landmark, FolderKanban, Users, Shield, Factory } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SelectCard from "../SelectCard";

export default function JobSelectSection() {
  const navigate = useNavigate();

  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      
      {/* 회계·세무 */}
      <SelectCard
        icon={<BookOpen className="h-10 w-10" />}
        title="회계·세무"
        items={[
          "전산회계 1급",
          "전산세무 1급",
          "재경관리사"
        ]}
        onClick={() => navigate("/study-certification/accounting")}
        animationDelay="0.1s"
      />

      {/* 금융·보험 */}
      <SelectCard
        icon={<Landmark className="h-10 w-10" />}
        title="금융·보험"
        items={[
          "투자자산운용사",
          "AFPK",
          "은행FP"
        ]}
        onClick={() => navigate("/study-certification/finance")}
        animationDelay="0.2s"
      />

      {/* 홍보·마케팅 */}
      <SelectCard
        icon={<FolderKanban className="h-10 w-10" />}
        title="사무·행정"
        items={[
          "컴퓨터활용능력 1급",
          "워드프로세서",
          "사무자동화산업기사"
        ]}
        onClick={() => navigate("/study-certification/officer")}
        animationDelay="0.3s"
      />

      {/* 인사·노무 */}
      <SelectCard
        icon={<Users className="h-10 w-10" />}
        title="인사·노무"
        items={[
          "공인노무사",
          "HRM 전문가",
          "ERP 인사 1급"
        ]}
        onClick={() => navigate("/study-certification/hr")}
        animationDelay="0.4s"
      />

      {/* IT·정보보안 */}
      <SelectCard
        icon={<Shield className="h-10 w-10" />}
        title="IT·정보보안"
        items={[
          "정보처리기사",
          "SQLD",
          "정보보안기사"
        ]}
        onClick={() => navigate("/study-certification/it")}
        animationDelay="0.5s"
      />

      {/* 생산·제조 */}
      <SelectCard
        icon={<Factory className="h-10 w-10" />}
        title="생산·제조"
        items={[
          "품질경영기사",
          "산업안전기사",
          "생산자동화산업기사"
        ]}
        onClick={() => navigate("/study-certification/manufacturing")}
        animationDelay="0.6s"
      />

    </section>
  );
}