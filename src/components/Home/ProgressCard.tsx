import type { ProgressCardProps } from "../../types/ProgressCardProps";

export default function ProgressCard({ schedules }: ProgressCardProps) {
  const total = schedules.length;
  const completed = schedules.filter((item) => item.completed).length;

  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div
      className="opacity-0 bg-white rounded-xl p-5 shadow-sm animate-fadein"
      style={{ animationDelay: "0.1s" }}
    >
      <h2 className="font-semibold mb-3">일정 완료도</h2>

      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>전체 진행률</span>
            <span className="text-gray-500">{percent}%</span>
          </div>

          <div className="w-full bg-gray-200 h-2 rounded">
            <div
              className="bg-[#78C5FF] h-2 rounded transition-all duration-500"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>

        <p className="text-xs text-gray-400">
          {completed} / {total} 완료
        </p>
      </div>
    </div>
  )
}