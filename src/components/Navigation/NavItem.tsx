import { useLocation, useNavigate } from "react-router-dom";

type Props = {
  icon: string;
  activeIcon: string;
  label: string;
  path: string;
};

export default function NavItem({ icon, activeIcon, label, path }: Props) {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = location.pathname === path;

  return (
    <div
      onClick={() => navigate(path)}
      className={`
        flex flex-col items-center justify-center 
        lg:flex-row lg:justify-start
        gap-1 lg:gap-3
        py-2 px-2 lg:px-3
        font-semibold
        cursor-pointer transition

        ${
          isActive
            ? "text-[#78C5FF] font-semibold"
            : "text-gray-500 hover:text-[#78C5FF]"
        }
      `}
    >
      <div className="w-6 h-6 flex items-center justify-center">
        <img
          src={isActive ? activeIcon : icon}
          className="max-w-full max-h-full"
        />
      </div>
      <span>{label}</span>
    </div>
  );
}