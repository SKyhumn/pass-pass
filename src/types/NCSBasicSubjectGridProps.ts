import type { NCSBasicSubject } from "./NCSBasicSubject";

export type NCSBasicSubjectGridProps = {
  subjects: NCSBasicSubject[];
  onClickStudy: (subject: NCSBasicSubject) => void;
};
