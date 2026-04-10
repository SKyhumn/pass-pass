import type { ChoiceItemProps } from "../../../types/ChoiceItemProps";

export default function ChoiceItem({
  text,
  isSelected,
  onClick,
}: ChoiceItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-4 rounded-2xl border px-5 py-4 text-left transition ${
        isSelected
          ? "border-[#78C5FF] bg-[#EAF6FF]"
          : "border-slate-200 bg-white hover:border-slate-300"
      }`}
    >
      <div
        className={`flex h-6 w-6 items-center justify-center rounded-full border ${
          isSelected
            ? "border-[#78C5FF] bg-[#78C5FF]"
            : "border-slate-200 bg-white"
        }`}
      >
        <div
          className={`h-2.5 w-2.5 rounded-full ${
            isSelected ? "bg-white" : "bg-transparent"
          }`}
        />
      </div>

      <span className="text-[18px] text-slate-800">{text}</span>
    </button>
  );
}