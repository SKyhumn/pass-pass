import type { ErrorMessageProps } from "../../types/ErrorMessageProps";

import errorIcon from "../../assets/error.png";

export default function ErrorMessage({ message }: ErrorMessageProps) {
    return (
        <div className="flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-lg text-sm">
            <img src={errorIcon} className="w-4"/>
            <span>{message}</span>
        </div>
    );
}