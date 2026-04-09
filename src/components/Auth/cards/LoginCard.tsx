import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../../../FirebaseSDK";
import { signInWithEmailAndPassword } from "firebase/auth";

import type { LoginCardProps } from "../../../types/LoginCardProps";

import InputField from "../InputField";
import Button from "../Button";

import emailIcon from "../../../assets/auth/email.png";
import passwordIcon from "../../../assets/auth/password.png";

export default function LoginCard({ onError }: LoginCardProps) {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const formValid: boolean = email.trim().length > 0 && password.trim().length > 0;

    const nav = useNavigate();

    const goSignUpPage = () => nav('/sign-up');

    const goForEmailVerify = () => nav('/email-verify');

    const handleSignIn = async() => {
        try {
            setLoading(true);
            setError("");

            await signInWithEmailAndPassword(auth, email, password);

            console.log("로그인 성공");

            // 👉 메인 페이지로 이동
            nav("/main");

        } catch (err: any) {
            if (err.code === "auth/user-not-found") {
            setError("존재하지 않는 계정입니다.");
            } else if (err.code === "auth/wrong-password") {
            setError("비밀번호가 틀렸습니다.");
            } else if (err.code === "auth/invalid-email") {
            setError("이메일 형식이 올바르지 않습니다.");
            } else {
            setError("로그인에 실패했습니다.");
            }

            onError(error);
        } finally {
            setLoading(false);
        }
    }

    return(
        <div className="opacity-0 w-full max-w-md bg-white rounded-2xl shadow-md p-6 space-y-5 animate-fadein" style={{ animationDelay: "0.1s" }}>

            <InputField
                label="이메일"
                type="email"
                placeholder="example@email.com"
                icon={emailIcon}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
            />

            <InputField
                label="비밀번호"
                type="password"
                placeholder="••••••••"
                icon={passwordIcon}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
            />

            <p onClick={goForEmailVerify} className="text-gray-400 text-xs text-right cursor-pointer hover:text-black hover:underline">
                비밀번호를 잊으셨나요?
            </p>

            {/* 버튼 */}
            <Button 
            text="로그인"
            disabled={!formValid}
            onClick={handleSignIn}
            loading={loading}
            />

            {/* 회원가입 이동 */}
            <p className="text-center text-sm text-gray-500">
                계정이 없으신가요?{" "}
                <span onClick={goSignUpPage} className="text-blue-400 cursor-pointer hover:underline">
                    회원가입
                </span>
            </p>

        </div>
    );
}