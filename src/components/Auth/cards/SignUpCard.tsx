import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../../../FirebaseSDK";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { db } from "../../../FirebaseSDK";
import { doc, setDoc } from "firebase/firestore";

import type { SignUpCardProps } from "../../../types/SignUpCardProps";

import InputField from "../InputField";
import Button from "../Button";
import ErrorMessage from "../ErrorMessage";

import userIcon from "../../../assets/auth/user.png";
import emailIcon from "../../../assets/auth/email.png";
import passwordIcon from "../../../assets/auth/password.png";

export default function SignUpCard({ onError }: SignUpCardProps) {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordAgain, setPasswordAgain] = useState<string>("");

    const [loading, setLoading] = useState<boolean>(false);

    const nameValid: boolean = name.length > 0;
    const emailValid: boolean = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordValid: boolean = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
    const isPasswordSame: boolean = password == passwordAgain;

    const formValid: boolean = nameValid && emailValid && passwordValid && isPasswordSame;

    const nav = useNavigate();

    const goSignInPage = () => nav('/sign-in');

    const handleSignUp = async() => {
        if (!formValid) return;

        try {
            setLoading(true);
            // 1. 회원가입
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            const user = userCredential.user;

            // 2. 이름 저장 (Auth)
            await updateProfile(user, {
                displayName: name,
            });

            // 3. Firestore 저장 (핵심🔥)
            await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                name: name,
                email: email,
                createdAt: new Date(),
            });

            // 4. 이동
            nav("/sign-in");

        } catch (error: any) {
            onError("회원가입에 실패했습니다.");
        } finally {
            setLoading(false);
        }
    }

    return(
        <div className="opacity-0 w-full max-w-md bg-white rounded-2xl shadow-md p-6 space-y-5 animate-fadein" style={{ animationDelay: "0.1s" }}>

            <InputField
                label="이름"
                type="text"
                placeholder="홍길동"
                icon={userIcon}
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
            />

            <InputField
                label="이메일"
                type="email"
                placeholder="example@email.com"
                icon={emailIcon}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
            />

            {!emailValid && 
            email.trim() !== "" && 
            <ErrorMessage message="@와 도메인이 포함되어야 하며 중복 이메일은 사용할 수 없습니다."/>}
            

            <InputField
                label="비밀번호"
                type="password"
                placeholder="최소 6자 이상"
                icon={passwordIcon}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
            />

            {!passwordValid && 
            password.trim() !== "" && 
            <ErrorMessage message="영문자와 숫자를 포함해 8자 이상이어야 합니다."/>}

            <InputField
                label="비밀번호 확인"
                type="password"
                placeholder="비밀번호 재입력"
                icon={passwordIcon}
                value={passwordAgain}
                onChange={(e) => setPasswordAgain(e.target.value)}
                disabled={loading}
            />

            {!isPasswordSame && 
            password.trim() !== "" && 
            <ErrorMessage message="비밀번호가 다릅니다."/>}

            {/* 버튼 */}
            <Button 
            text="회원가입"
            disabled={!formValid}
            onClick={handleSignUp}
            loading={loading}
            />

            {/* 로그인 이동 */}
            <p className="text-center text-sm text-gray-500">
                이미 계정이 있으신가요?{" "}
                <span onClick={goSignInPage} className="text-blue-400 cursor-pointer hover:underline">
                    로그인
                </span>
            </p>
        </div>
    );
}