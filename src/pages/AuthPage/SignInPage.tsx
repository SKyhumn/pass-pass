import { useState } from "react";

import LoginCard from "../../components/Auth/cards/LoginCard";
import Modal from "../../components/Modals/Modal";

import logo from "../../assets/logo/pass-pass-logo.png";

export default function SignInPage() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>("");

  const handleError = (message: string) => {
    setModalMessage(message);
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col items-center min-h-screen py-20 px-4 bg-linear-to-b from-[#b9e0fd] to-white">

      {/* 로고 */}
      <img src={logo} className="opacity-0 w-55 mb-10 animate-fadein"/>

      <LoginCard onError={handleError}/>

      {modalOpen && (
        <Modal
          message={modalMessage}
          onClose={() => setModalOpen(false)}
        />
      )}

    </div>
  );
}