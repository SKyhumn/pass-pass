import logout from "../../assets/logout/logout.png";
import logoutHoverd from "../../assets/logout/logout-hover.png";

type Props = {
  userName: string;
  onLogout: () => void
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

        <img src={logout} onClick={onLogout} className="w-5 cursor-pointer"/>
    </div>
  );
}