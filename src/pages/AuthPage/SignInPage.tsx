import LoginCard from "../../components/Auth.tsx/LoginCard";

import logo from "../../assets/pass-pass-logo.png";

export default function SignInPage() {
  return (
        <div className="flex flex-col items-center min-h-screen py-20 px-4 bg-linear-to-b from-[#b9e0fd] to-white">

            {/* 로고 */}
            <img src={logo} className="opacity-0 w-55 mb-10 animate-fadein"/>

            <LoginCard/>

        </div>
  );
}