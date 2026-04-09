import type { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export default function ScheduleSection({ title, children }: Props) {
  return (
    <section className="space-y-4 animate-fadein">
      <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}