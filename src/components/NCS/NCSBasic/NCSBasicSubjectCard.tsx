import type { NCSBasicSubjectCardProps } from "../../../types/NCSBasicSubjectCardProps";

export default function NCSBasicSubjectCard({
  subject,
  onClickStudy,
}: NCSBasicSubjectCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-[20px] font-bold text-slate-900">{subject.title}</h2>

      <div className="mt-10 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-[18px] text-slate-500">문제 수</span>
          <span className="text-[18px] font-bold text-slate-900">
            {subject.totalQuestions}문제
          </span>
        </div>
      </div>

      <button
        onClick={() => onClickStudy(subject)}
        className="mt-8 w-full rounded-2xl bg-[#78C5FF] py-3 text-lg font-semibold text-white transition hover:bg-[#67aadd]"
      >
        학습하기
      </button>
    </article>
  );
}