import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

import InputField from "../InputField";
import Button from "../Button";

import emailIcon from "../../../assets/email.png";

export default function EmailVerifyCard() {
    const nav = useNavigate();
    const auth = getAuth();

    const [email, setEmail] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const [alertOn, setAlertOn] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const goSignInPage = () => {
        nav('/sign-in');
    };

    const handleResetPassword = async () => {
        setAlertOn(false);
        setError(false);

        if (!email) {
            alert("이메일을 입력해주세요.");
            return;
        }

        try {
            setLoading(true);
            await sendPasswordResetEmail(auth, email);
            setAlertOn(true);
        } catch (error:any) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="opacity-0 w-full max-w-md bg-white rounded-2xl shadow-md p-6 space-y-5 animate-fadein">
            
            <InputField
                label="이메일"
                type="email"
                placeholder="example@email.com"
                icon={emailIcon}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
            />

            {alertOn && 
                <div className="w-full px-3 py-3 border border-amber-500 rounded-xl bg-yellow-100 text-amber-500 text-sm">
                    비밀번호 재설정 메일을 보냈습니다.
                </div>
            }

            {error && 
                <div className="w-full px-3 py-3 border border-red-600 rounded-xl bg-red-300 text-red-600 text-sm">
                    재설정 메일 요청을 실패했습니다.
                </div>
            }

            <Button
                text="비밀번호 재설정 메일 보내기"
                disabled={loading}
                onClick={handleResetPassword}
                loading={loading}
            />

            <p
                onClick={goSignInPage}
                className="text-center text-sm cursor-pointer hover:underline"
            >
                로그인으로 돌아가기
            </p>

        </div>
    );
}