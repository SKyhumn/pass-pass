import type { ResultActionButtonsProps } from "../../../types/ResultActionButtonsProps";

export default function ResultActionButtons({
  onRetry,
  onGoMain,
}: ResultActionButtonsProps) {
  return (
    <div className="flex gap-3 justify-center">
      <button
        onClick={onRetry}
        className="px-6 py-3 bg-[#78c5ff] text-white font-semibold rounded-xl"
      >
        다시 풀기
      </button>

      <button
        onClick={onGoMain}
        className="px-6 py-3 bg-[#78C5FF] text-white font-semibold rounded-xl"
      >
        메인으로
      </button>
    </div>
  );
}