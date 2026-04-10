import { useLocation, useNavigate } from "react-router-dom";

import type { ResultState } from "../../types/ResultState";

import ResultSummaryCard from "../../components/Study/Result/ResultSummaryCard";
import ResultActionButtons from "../../components/Study/Result/ResultActionButtons";
import ResultQuestionCard from "../../components/Study/Result/ResultQuestionCard";

export default function ResultPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const result = location.state as ResultState | undefined;

  if (!result) {
    return (
      <div className="p-6 md:p-8">
        <p className="text-slate-500">결과 정보가 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        
        {/* 점수 */}
        <ResultSummaryCard
          score={result.score}
          correctCount={result.correctCount}
          totalCount={result.totalCount}
        />

        {/* 해설 */}
        <section className="space-y-5">
          <h2 className="text-2xl font-bold">문제별 해설</h2>

          {result.results.map((item) => (
            <ResultQuestionCard key={item.id} item={item} />
          ))}
        </section>

        {/* 버튼 */}
        <ResultActionButtons
          onRetry={() => navigate(result.retryPath)}
          onGoMain={() => navigate(result.mainPath)}
        />
      </div>
    </div>
  );
}