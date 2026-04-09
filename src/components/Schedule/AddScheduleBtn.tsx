import type { AddScheduleBtnProps } from "../../types/AddScheduleBtnProps";

export default function AddScheduleBtn({ onClick }: AddScheduleBtnProps) {
  return (
    <button
      onClick={onClick}
      className="opacity-0 w-full rounded-2xl py-5 text-white text-xl font-semibold shadow-sm transition cursor-pointer hover:brightness-105 active:scale-[0.99] animate-fadein"
      style={{ backgroundColor: "#78C5FF",  animationDelay: "0.1s" }}
    >
      + 새 일정 추가
    </button>
  );
}