import type { QuestionResult } from "./QuestionResult";

export type ResultState = {
  subjectId: number;
  subjectTitle: string;
  totalCount: number;
  correctCount: number;
  score: number;
  results: QuestionResult[];
  retryPath: string;
  mainPath: string;
};