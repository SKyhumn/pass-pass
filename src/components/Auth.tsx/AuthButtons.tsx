import { useNavigate } from "react-router-dom";

export default function AuthButtons() {
    const nav = useNavigate();

    const goSignInPage = () => nav('/sign-in');

    const goSignUpPage = () => nav('/sign-up');

    return(
        <div className="opacity-0 flex flex-col gap-2 w-full max-w-md mb-10 animate-fadein" style={{ animationDelay: "0.2s" }}>
            <button onClick={goSignInPage} className="py-2 rounded-lg bg-[#a9d4f5] text-white font-semibold cursor-pointer
            hover:bg-[#bfe3ff] hover:scale-105 transition duration-200">
                로그인
            </button>

            <button onClick={goSignUpPage} className="py-2 rounded-lg bg-gray-200 text-black font-semibold cursor-pointer
            hover:bg-gray-100 hover:scale-105 transition duration-200">
                회원가입
            </button>
        </div>
    );
}