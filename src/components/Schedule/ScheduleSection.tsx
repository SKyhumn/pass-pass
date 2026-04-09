import type { ScheduleSectionProps } from "../../types/ScheduleSectionProps";

export default function ScheduleSection({ title, children }: ScheduleSectionProps) {
  return (
    <section className="space-y-4 animate-fadein">
      <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}