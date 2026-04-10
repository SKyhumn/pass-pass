import type { QuestionResult } from "../../../types/QuestionResult";

type Props = {
  item: QuestionResult;
};

export default function ResultQuestionCard({ item }: Props) {
  return (
    <div className="rounded-2xl p-6 shadow-sm bg-white">
      <div className="flex justify-between text-lg font-semibold mb-2">
        <p>문제 {item.id}</p>
        <span
          className={`font-bold ${
            item.isCorrect ? "text-green-500" : "text-red-500"
          }`}
        >
          {item.isCorrect ? "정답" : "오답"}
        </span>
      </div>

      <p className="mb-3">{item.question}</p>

      <p>내 답: {item.userAnswer}번</p>
      {!item.isCorrect && <p>정답: {item.correctAnswer}번</p>}

      <p className="mt-3 text-slate-600">
        해설: {item.explanation}
      </p>
    </div>
  );
}