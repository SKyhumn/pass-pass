import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import type { QuestionHeaderProps } from "../../../types/QuestionHeaderProps";

export default function QuestionHeader({
  subjectTitle,
  currentNumber,
  totalCount,
}: QuestionHeaderProps) {
  const navigate = useNavigate();

  return (
    <section className="space-y-5">
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 rounded-md px-1 py-1 text-sm text-slate-500 transition hover:text-slate-700"
      >
        <ArrowLeft className="h-4 w-4" />
        돌아가기
      </button>

      <div className="space-y-3">
        <h1 className="text-2xl font-bold">{subjectTitle}</h1>

        <div className="flex items-center gap-4">
          <p className="min-w-fit text-md text-slate-700">
            문제 {currentNumber} / {totalCount}
          </p>
        </div>
      </div>
    </section>
  );
}