import { useState } from "react";

import eyeOpen from "../../assets/password show.png";
import eyeClose from "../../assets/password no show.png";

type Props = {
  label: string;
  type: string;
  placeholder: string;
  icon: string;
};

export default function InputField({ label, type, placeholder, icon }: Props) {
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
                className="bg-transparent outline-none w-full text-sm"
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