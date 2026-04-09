import type { NCSProgressBarProps } from "../../../types/NCSProgressBarProps";

export default function NCSProgressBar({
  current,
  total,
}: NCSProgressBarProps) {
  const progress = (current / total) * 100;

  return (
    <div className="h-3 w-full rounded-full bg-slate-300">
      <div
        className="h-3 rounded-full bg-[#] transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}