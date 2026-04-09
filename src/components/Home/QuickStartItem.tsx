import { useNavigate } from "react-router-dom";

import type { QuickStartProps } from "../../types/QuickStartProps";

export default function QuickStartItem({ icon, title, bgColor, path }: QuickStartProps) {
    const nav = useNavigate();

    return (
        <div 
        onClick={() => nav(path)}
        className="bg-white rounded-xl p-4 shadow-sm text-center cursor-pointer hover:scale-105 transition"
        >

            {/* 🔥 아이콘 영역 */}
            <div className="flex justify-center mb-3">
                <div className={`w-12 h-12 rounded-full ${bgColor} flex items-center justify-center`}>
                <img src={icon} className="h-5"/>
                </div>
            </div>

            <p className="mt-2 text-sm font-medium">{title}</p>
        </div>
    );
}