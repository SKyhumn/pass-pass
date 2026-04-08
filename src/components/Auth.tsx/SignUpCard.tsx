import InputField from "./InputField";

import user from "../../assets/user.png";
import email from "../../assets/email.png";
import password from "../../assets/password.png";

export default function SignUpCard() {
    return(
        <div className="opacity-0 w-full max-w-md bg-white rounded-2xl shadow-md p-6 space-y-5 animate-fadein" style={{ animationDelay: "0.1s" }}>

            <InputField
                label="이름"
                type="text"
                placeholder="홍길동"
                icon={user}
            />

            <InputField
                label="이메일"
                type="email"
                placeholder="example@email.com"
                icon={email}
            />

            <InputField
                label="비밀번호"
                type="password"
                placeholder="최소 6자 이상"
                icon={password}
            />

            <InputField
                label="비밀번호 확인"
                type="password"
                placeholder="비밀번호 재입력"
                icon={password}
            />

            {/* 버튼 */}
            <button className="w-full py-2 rounded-lg bg-[#a9d4f5] text-white font-semibold 
            hover:bg-[#bfe3ff] hover:scale-105 transition duration-200 active:scale-95">
                회원가입
            </button>

            {/* 로그인 이동 */}
            <p className="text-center text-sm text-gray-500">
                이미 계정이 있으신가요?{" "}
                <span className="text-blue-400 cursor-pointer hover:underline">
                    로그인
                </span>
            </p>

        </div>
    );
}