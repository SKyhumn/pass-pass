import type { ButtonProps } from "../../types/ButtonProps";

export default function Button({ text, onClick, disabled = false, loading = false }: ButtonProps) {
    const isDisabled = disabled || loading;

    return(
        <button 
        onClick={onClick}
        disabled={disabled} 
        className={`w-full py-2 rounded-lg font-semibold text-center transition duration-200
            ${
            isDisabled
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-[#a9d4f5] text-white hover:bg-[#bfe3ff] hover:scale-105 active:scale-95"
            }`}
        >
            {text}
        </button>
    );
}