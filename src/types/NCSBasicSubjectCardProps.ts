import type { NCSBasicSubject } from "./NCSBasicSubject";

export type NCSBasicSubjectCardProps = {
  subject: NCSBasicSubject;
  onClickStudy: (subject: NCSBasicSubject) => void;
};