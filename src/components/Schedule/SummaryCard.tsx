import type { SummaryCardProps } from "../../types/SummaryCardProps";

export default function SummaryCard({
  title,
  count,
  icon,
  accentColor,
  iconBgClass,
}: SummaryCardProps) {
  return (
    <div
      className="bg-white rounded-2xl shadow-sm px-6 py-5 border-l-4"
      style={{ borderLeftColor: accentColor }}
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center ${iconBgClass}`}
        >
          <img src={icon} alt={title} className="w-7 h-7 object-contain" />
        </div>

        <div>
          <p className="text-gray-500 text-sm font-medium">{title}</p>
          <p className="text-3xl font-semibold text-slate-800 leading-none mt-1">
            {count}
          </p>
        </div>
      </div>
    </div>
  );
}