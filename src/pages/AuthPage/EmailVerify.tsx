import EmailVerifyCard from "../../components/Auth.tsx/cards/EmailVerifyCard";

import key from "../../assets/key.png";

export default function EmailVerify() {
    return(
        <div className="flex flex-col items-center min-h-screen py-20 px-4 bg-linear-to-b from-[#b9e0fd] to-white">

            <img src={key} className="opacity-0 w-20 mb-4 animate-fadein"/>

            <h1 className="opacity-0 mb-8 text-2xl font-bold animate-fadein" style={{ animationDelay: "0.1s" }}>이메일 인증</h1>

            <EmailVerifyCard/>

        </div>
    );
}