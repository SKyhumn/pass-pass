import type { NCSBasicSubjectGridProps } from "../../../types/NCSBasicSubjectGridProps";
import NCSBasicSubjectCard from "./NCSBasicSubjectCard";


export default function NCSBasicSubjectGrid({
  subjects,
  onClickStudy,
}: NCSBasicSubjectGridProps) {
  return (
    <section
      className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 opacity-0 animate-fadein"
      style={{ animationDelay: "0.1s" }}
    >
      {subjects.map((subject) => (
        <NCSBasicSubjectCard
          key={subject.id}
          subject={subject}
          onClickStudy={onClickStudy}
        />
      ))}
    </section>
  );
}