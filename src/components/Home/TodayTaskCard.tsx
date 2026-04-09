import type { TodayTaskCardProps } from "../../types/TodayTaskCardProps";

export default function TodayTaskCard({ schedules }: TodayTaskCardProps) {
  const today = new Date().toISOString().slice(0, 10);
  // 👉 "2026-04-24" 형식

  const todaySchedules = schedules.filter(
    (item) => item.date === today
  );

  return (
    <div className="opacity-0 bg-white rounded-xl p-5 shadow-sm animate-fadein" style={{ animationDelay: "0.3s" }}>
      <h2 className="font-semibold mb-3">오늘 할 일</h2>

      {todaySchedules.length === 0 ? (
        <p className="text-sm text-gray-400">오늘 일정이 없습니다</p>
      ) : (
        <ul className="text-sm text-gray-600 space-y-2">
          {todaySchedules.map((item) => (
            <li key={item.id} className="flex items-center gap-2">
              <span className="text-[#78C5FF]">•</span>
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}