import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import QuestionHeader from "../../../components/Study/Question/QuestionHeader";
import QuestionCard from "../../../components/Study/Question/QuestionCard";

import type { Question } from "../../../types/Question";

import communicationQuestions from "../../../mock-data/NCS/basic/communication.json";
import mathQuestions from "../../../mock-data/NCS/basic/math.json";
import problemSolvingQuestions from "../../../mock-data/NCS/basic/solve.json";
import resourceManagementQuestions from "../../../mock-data/NCS/basic/management.json";
import informationQuestions from "../../../mock-data/NCS/basic/information.json";

const subjectTitleMap: Record<number, string> = {
  1: "의사소통능력",
  2: "수리능력",
  3: "문제해결능력",
  4: "자원관리능력",
  5: "정보능력",
};

const questionMap: Record<number, Question[]> = {
  1: communicationQuestions,
  2: mathQuestions,
  3: problemSolvingQuestions,
  4: resourceManagementQuestions,
  5: informationQuestions,
};

export default function NCSBasicQuestionPage() {
  const navigate = useNavigate();
  const { subjectId } = useParams();

  const parsedSubjectId = Number(subjectId);

  const subjectTitle = subjectTitleMap[parsedSubjectId];
  const questions = questionMap[parsedSubjectId];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    questions ? Array(questions.length).fill(null) : []
  );

  const currentQuestion = useMemo(() => {
    if (!questions) return null;
    return questions[currentIndex];
  }, [questions, currentIndex]);

  if (!subjectTitle || !questions || !currentQuestion) {
    return (
      <div className="p-6 md:p-8">
        <div className="mx-auto max-w-5xl space-y-4">
          <p className="text-slate-500">존재하지 않는 과목입니다.</p>
          <button
            onClick={() => navigate("/study-ncs/basic")}
            className="rounded-xl bg-sky-300 px-4 py-2 text-white"
          >
            목록으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  const handleSelectChoice = (choiceIndex: number) => {
    const nextAnswers = [...answers];
    nextAnswers[currentIndex] = choiceIndex;
    setAnswers(nextAnswers);
  };

  const handleNext = () => {
    if (answers[currentIndex] === null) return;

    const isLast = currentIndex === questions.length - 1;

    if (isLast) {
      handleSubmit();
      return;
    }

    setCurrentIndex((prev) => prev + 1);
  };

  const handleSubmit = () => {
    if (!questions) return;

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

    const correctCount = results.filter((result) => result.isCorrect).length;
    const score = Math.round((correctCount / questions.length) * 100);

    navigate(`/study-ncs/basic/${parsedSubjectId}/result`, {
      state: {
        subjectId: parsedSubjectId,
        subjectTitle,
        totalCount: questions.length,
        correctCount,
        score,
        results,
        retryPath: `/study-ncs/basic/${parsedSubjectId}`,
        mainPath: "/study-ncs",
      },
    });
  };

  return (
    <div className="p-6 md:p-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <QuestionHeader
          subjectTitle={subjectTitle}
          currentNumber={currentIndex + 1}
          totalCount={questions.length}
          backPath="/study-ncs/basic"
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
    </div>
  );
}