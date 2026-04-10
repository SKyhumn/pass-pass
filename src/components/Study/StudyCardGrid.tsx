import type { StudyCardGridProps } from "../../types/StudyCardGridProps";
import StudyCard from "./StudyCard";


export default function StudyCardGrid({
  subjects,
  onClickStudy,
}: StudyCardGridProps) {
  return (
    <section
      className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 opacity-0 animate-fadein"
      style={{ animationDelay: "0.1s" }}
    >
      {subjects.map((subject) => (
        <StudyCard
          key={subject.id}
          subject={subject}
          onClickStudy={onClickStudy}
        />
      ))}
    </section>
  );
}