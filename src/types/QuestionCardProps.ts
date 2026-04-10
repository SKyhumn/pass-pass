import type { Question } from "./Question";

export type QuestionCardProps = {
  questionNumber: number;
  question: Question;
  selectedIndex: number | null;
  onSelectChoice: (index: number) => void;
  onNext: () => void;
  isLastQuestion: boolean;
};