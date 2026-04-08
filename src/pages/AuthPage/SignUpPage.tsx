import { useState } from "react";

import SignUpCard from "../../components/Auth.tsx/cards/SignUpCard";
import Modal from "../../components/Modals/modal";

import signup from "../../assets/signup.png";

export default function SignUpPage() {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [modalMessage, setModalMessage] = useState<string>("");

    const handleError = (message: string) => {
        setModalMessage(message);
        setModalOpen(true);
    };

    return(
        <div className="flex flex-col items-center h-[110vh] py-20 px-4 bg-linear-to-b from-[#b9e0fd] to-white">

            {/* 로고 */}
            <img src={signup} className="opacity-0 w-20 mb-4 animate-fadein"/>
            
            <h1 className="opacity-0 text-2xl font-bold animate-fadein" style={{ animationDelay: "0.1s" }}>회원가입</h1>
            <p className="opacity-0 text-gray-500 mt-1 mb-8 animate-fadein" style={{ animationDelay: "0.1s" }}>
                패스패스와 함께 공기업 취업 준비를 시작하세요
            </p>

            <SignUpCard onError={handleError} />

            
            {modalOpen && (
                <Modal
                    message={modalMessage}
                    onClose={() => setModalOpen(false)}
                />
            )}

        </div>
    );
}