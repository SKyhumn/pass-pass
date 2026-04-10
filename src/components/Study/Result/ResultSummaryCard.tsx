import type { ResultSummaryCardProps } from "../../../types/ResultSummaryCardProps";

export default function ResultSummaryCard({
  score,
  correctCount,
  totalCount,
}: ResultSummaryCardProps) {
  return (
    <section className="rounded-[28px] border border-sky-200 bg-[#DFF1FF] px-6 py-10 text-center shadow-sm">
      <h1 className="text-5xl font-bold">{score}점</h1>
      <p className="mt-3 text-xl text-slate-700">
        {correctCount}/{totalCount} 문제 정답
      </p>
    </section>
  );
}