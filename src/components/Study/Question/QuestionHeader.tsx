import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import type { QuestionHeaderProps } from "../../../types/QuestionHeaderProps";

export default function QuestionHeader({
  subjectTitle,
  currentNumber,
  totalCount,
  timeLeft,
}: QuestionHeaderProps) {
  const navigate = useNavigate();

  const formatTime = (seconds: number) => {
    const minute = Math.floor(seconds / 60);
    const second = seconds % 60;
    return `${minute}:${second.toString().padStart(2, "0")}`;
  };

  const isDanger = timeLeft !== undefined && timeLeft <= 10;

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

        <div className="flex items-center justify-between gap-4 pr-16">
          <p className="min-w-fit text-md text-slate-700">
            문제 {currentNumber} / {totalCount}
          </p>

          {timeLeft !== undefined && (
            <p
              className={`text-md font-semibold ${
                isDanger ? "text-red-500" : "text-slate-700"
              }`}
            >
              {formatTime(timeLeft)}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}