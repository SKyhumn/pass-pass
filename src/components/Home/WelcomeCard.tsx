import logout from "../../assets/logout.png";

type Props = {
    userName: string;
    onLogout: () => void;
};

export default function WelcomeCard({ userName, onLogout }: Props) {
    return (
        <div className="opacity-0 flex items-center justify-between animate-fadein">
        
            <div>
                <h1 className="text-2xl font-bold">{userName}님 👋</h1>
                <p className="text-gray-500 mt-1">
                    오늘도 합격에 한 걸음!
                </p>
            </div>

            {/* 🔥 로그아웃 버튼 */}
            <div
                onClick={onLogout}
                className="
                    w-10 h-10 
                    flex items-center justify-center 
                    rounded-full 
                    cursor-pointer 
                    hover:bg-gray-200 
                    transition
                "
            >
                <img src={logout} className="w-5" />
            </div>

        </div>
    );
}