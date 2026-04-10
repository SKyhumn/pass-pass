import type { Subject } from "./Subject";

export type StudyCardGridProps = {
  subjects: Subject[];
  onClickStudy: (subject: Subject) => void;
};
