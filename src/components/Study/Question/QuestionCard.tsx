import ChoiceItem from "./ChoiceItem";
import type { QuestionCardProps } from "../../../types/QuestionCardProps";

export default function QuestionCard({
  questionNumber,
  question,
  selectedIndex,
  onSelectChoice,
  onNext,
  isLastQuestion,
}: QuestionCardProps) {
  return (
    <section className="mx-auto max-w-5xl rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
      <div className="space-y-8">
        <div className="space-y-6">
          <p className="text-lg text-slate-800">문제 {questionNumber}</p>

          <h2 className="text-xl font-semibold leading-relaxed text-slate-950 md:text-[22px]">
            {question.question}
          </h2>
        </div>

        <div className="space-y-4">
          {question.choices.map((choice, index) => (
            <ChoiceItem
              key={index}
              text={choice}
              isSelected={selectedIndex === index}
              onClick={() => onSelectChoice(index)}
            />
          ))}
        </div>

        <button
          onClick={onNext}
          disabled={selectedIndex === null}
          className="w-full rounded-2xl bg-[#78C5FF] py-4 text-xl font-semibold text-white transition hover:bg-[#67aadd] disabled:cursor-not-allowed disabled:bg-sky-200"
        >
          {isLastQuestion ? "제출하기" : "다음"}
        </button>
      </div>
    </section>
  );
}