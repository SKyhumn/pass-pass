import type { NCSQuestion } from "./NCSQuestion";

export type NCSQuestionCardProps = {
  questionNumber: number;
  question: NCSQuestion;
  selectedIndex: number | null;
  onSelectChoice: (index: number) => void;
  onNext: () => void;
  isLastQuestion: boolean;
};