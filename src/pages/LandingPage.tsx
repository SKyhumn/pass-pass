import SelectionButtons from "../components/Auth/SelectionButtons";
import FeatureGrid from "../components/Features/FeatureGrid";

import logo from "../assets/logo/pass-pass-logo.png";

export default function LandingPage() {
    return(
        <div className="flex flex-col items-center h-screen px-4 py-8 bg-linear-to-b from-[#b9e0fd] to-white">

            {/* 로고 */}
            <img src={logo} className="opacity-0 w-60 mb-4 animate-fadein"/>

            {/* 상단 설명 */}
            <p className="opacity-0 mb-6 text-gray-600 font-semibold animate-fadein" style={{ animationDelay: "0.1s" }}>
                공기업 취업 준비의 모든 것, 한번에
            </p>

            {/* 로그인 / 회원가입 버튼 */}
            <SelectionButtons/>

            {/* 기능 카드 영역 */}
            <FeatureGrid/>

        </div>
    );
}