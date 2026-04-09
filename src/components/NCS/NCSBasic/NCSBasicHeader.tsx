import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NCSBasicHeader() {
  const navigate = useNavigate();

  return (
    <section className="opacity-0 space-y-2 animate-fadein">
      {/* 뒤로가기 */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm text-slate-500 cursor-pointer hover:text-slate-700 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        뒤로가기
      </button>

      <h1 className="text-2xl font-bold text-slate-900">필수과목 학습</h1>
      <p className="text-md text-slate-500">
        NCS 직업기초능력 5개 영역을 과목별로 학습해보세요.
      </p>
    </section>
  );
}