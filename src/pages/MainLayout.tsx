import { Outlet } from "react-router-dom";

import Sidebar from "../components/Navigation/Bar/SideBar";
import BottomNav from "../components/Navigation/Bar/BottomNav";

export default function MainLayout() {
    return(
        <div className="flex min-h-screen bg-linear-to-b from-[#b9e0fd] to-white">

            {/* 사이드바 */}
            <Sidebar />

            {/* 메인 영역 */}
            <div className="flex-1 lg:ml-60 pb-16 lg:pb-0">
                <Outlet />
            </div>

            {/* 하단 네비 */}
            <BottomNav />

        </div>
    )
}