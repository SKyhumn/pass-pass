import type { ModalProps } from "../../types/ModalProps";

export default function Modal({ message, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">

      {/* 모달 박스 */}
      <div className="bg-white rounded-2xl p-6 w-[90%] max-w-sm shadow-lg animate-fadein">

        {/* 메시지 */}
        <p className="text-xl text-center text-gray-700 font-bold mb-6">
          {message}
        </p>

        {/* 버튼 */}
        <button
          onClick={onClose}
          className="w-full py-2 rounded-lg bg-[#a9d4f5] text-white font-semibold
          hover:bg-[#bfe3ff] transition"
        >
          닫기
        </button>

      </div>
    </div>
  );
}