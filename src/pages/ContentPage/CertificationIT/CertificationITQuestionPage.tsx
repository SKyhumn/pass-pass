import { useMemo, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import type { Question } from "../../../types/Question";

import QuestionHeader from "../../../components/Study/Question/QuestionHeader";
import QuestionCard from "../../../components/Study/Question/QuestionCard";
import Modal from "../../../components/Modals/Modal";

import JBCRGS from "../../../mock-data/Certification/it/JBCRGS.json";
import SQLD from "../../../mock-data/Certification/it/SQLD.json";
import JBBAGS from "../../../mock-data/Certification/it/JBBAGS.json";

const subjectTitleMap: Record<number, string> = {
  1: "정보처리기능사",
  2: "SQLD",
  3: "JBBAGS"
};

const questionMap: Record<number, Question[]> = {
  1: JBCRGS,
  2: SQLD,
  3: JBBAGS
};

export default function CertificationITQuestionPage() {
  const navigate = useNavigate();
  const { subjectId } = useParams();

  const parsedSubjectId = Number(subjectId);

  const subjectTitle = subjectTitleMap[parsedSubjectId];
  const questions = questionMap[parsedSubjectId];

  const [timeLeft, setTimeLeft] = useState(30); // 실제는 600 추천 (10분)
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    questions ? Array(questions.length).fill(null) : []
  );

  const currentQuestion = useMemo(() => {
    if (!questions) return null;
    return questions[currentIndex];
  }, [questions, currentIndex]);

  // ⏱ 타이머
  useEffect(() => {
    if (!questions || isSubmitted) return;

    if (timeLeft <= 0) {
      setIsTimeUp(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, questions, isSubmitted]);

  // ❌ 잘못된 접근 처리
  if (!subjectTitle || !questions || !currentQuestion) {
    return (
      <div className="p-6 md:p-8">
        <div className="mx-auto max-w-5xl space-y-4">
          <p className="text-slate-500">존재하지 않는 과목입니다.</p>
          <button
            onClick={() => navigate("/study-certification/it")}
            className="rounded-xl bg-[#78C5FF] px-4 py-2 text-white"
          >
            목록으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  // ✅ 선택
  const handleSelectChoice = (choiceIndex: number) => {
    if (isTimeUp || isSubmitted) return;

    const nextAnswers = [...answers];
    nextAnswers[currentIndex] = choiceIndex;
    setAnswers(nextAnswers);
  };

  // 👉 다음
  const handleNext = () => {
    if (isTimeUp || isSubmitted) return;
    if (answers[currentIndex] === null) return;

    const isLast = currentIndex === questions.length - 1;

    if (isLast) {
      handleSubmit();
      return;
    }

    setCurrentIndex((prev) => prev + 1);
  };

  // 🎯 제출
  const handleSubmit = () => {
    if (!questions || isSubmitted) return;

    setIsSubmitted(true);

    const results = questions.map((question, index) => {
      const userAnswer = (answers[index] ?? -1) + 1;
      const isCorrect = userAnswer === question.answer;

      return {
        id: index + 1,
        question: question.question,
        userAnswer,
        correctAnswer: question.answer,
        explanation: question.explanation,
        isCorrect,
      };
    });

    const correctCount = results.filter((r) => r.isCorrect).length;
    const score = Math.round((correctCount / questions.length) * 100);

    navigate(`/study-certification/it/${parsedSubjectId}/result`, {
      state: {
        subjectId: parsedSubjectId,
        subjectTitle,
        totalCount: questions.length,
        correctCount,
        score,
        results,
        retryPath: `/study-certification/it/${parsedSubjectId}`,
        mainPath: "/study-certification"
      },
    });
  };

  // ⏰ 시간 종료 모달 닫기
  const handleCloseModal = () => {
    setIsTimeUp(false);
    handleSubmit();
  };

  return (
    <div className="p-6 md:p-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <QuestionHeader
          subjectTitle={subjectTitle}
          currentNumber={currentIndex + 1}
          totalCount={questions.length}
          timeLeft={timeLeft}
          backPath="/study-certification/it"
        />

        <QuestionCard
          questionNumber={currentIndex + 1}
          question={currentQuestion}
          selectedIndex={answers[currentIndex]}
          onSelectChoice={handleSelectChoice}
          onNext={handleNext}
          isLastQuestion={currentIndex === questions.length - 1}
        />
      </div>

      {/* ⏰ 시간 종료 모달 */}
      {isTimeUp && (
        <Modal
          message="시간이 종료되었습니다. 결과를 확인하세요!"
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}