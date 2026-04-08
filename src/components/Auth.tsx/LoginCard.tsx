import InputField from "./InputField";

import email from "../../assets/email.png";
import password from "../../assets/password.png"

export default function LoginCard() {
    return(
        <div className="opacity-0 w-full max-w-md bg-white rounded-2xl shadow-md p-6 space-y-5 animate-fadein" style={{ animationDelay: "0.1s" }}>

            <InputField
                label="이메일"
                type="email"
                placeholder="example@email.com"
                icon={email}
            />

            <InputField
                label="비밀번호"
                type="password"
                placeholder="••••••••"
                icon={password}
            />

            <button className="w-full py-2 rounded-lg bg-[#a9d4f5] text-white font-semibold 
            hover:bg-[#bfe3ff] hover:scale-105 transition duration-200">
                로그인
            </button>

            <p className="text-center text-sm text-gray-500">
                계정이 없으신가요?{" "}
                <span className="text-blue-400 cursor-pointer hover:underline">
                    회원가입
                </span>
            </p>
        </div>
    );
}