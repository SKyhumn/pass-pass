import type { Subject } from "./Subject";

export type StudyCardProps = {
  subject: Subject;
  onClickStudy: (subject: Subject) => void;
};