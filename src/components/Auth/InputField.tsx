import { useState } from "react";

import eyeOpen from "../../assets/auth/password show.png";
import eyeClose from "../../assets/auth/password no show.png";

type Props = {
  label: string;
  type: string;
  placeholder: string;
  icon: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

export default function InputField({ label, type, placeholder, icon, value, onChange, disabled }: Props) {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const isPassword = type === "password";

    return(
        <div>
            <label className="text-sm font-medium text-gray-700">
                {label}
            </label>

            <div className="mt-1 flex items-center bg-gray-100 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-200">

                {/* 아이콘 */}
                <img src={icon} className="w-4 mr-3" />

                <input
                type={isPassword && showPassword ? "text" : type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`bg-transparent outline-none w-full text-sm
                    ${disabled ? "text-gray-400 cursor-not-allowed" : ""}
                `}
                disabled={disabled}
                />

                {/* 👁️ 비밀번호 토글 */}
                {isPassword && (
                    <img
                        src={!showPassword ? eyeOpen : eyeClose}
                        onClick={() => setShowPassword(!showPassword)}
                        className="w-5 ml-2 cursor-pointer opacity-60 hover:opacity-100"
                    />
                )}
            </div>
        </div>
    );
}