import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../../FirebaseSDK";
import { onAuthStateChanged, signOut } from "firebase/auth";

import type { User } from "firebase/auth";

import WelcomeCard from "../../components/Home/WelcomeCard";
import ProgressCard from "../../components/Home/ProgressCard";
import QuickStartGrid from "../../components/Home/QuickStartGrid";
import TodayTaskCard from "../../components/Home/TodayTaskCard";

import Modal from "../../components/Modals/Modal";

export default function MainPage() {
    const [user, setUser] = useState<User | null>(null);

    const [error, setError] = useState<boolean>(false);

    const nav = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        setError(false);

        try {
            await signOut(auth);
            nav("/sign-in");
        } catch (error) {
            setError(true);
        }
    };

    return (
        <div className="p-6 space-y-6">
            <WelcomeCard 
                userName={user?.displayName || "사용자"} 
                onLogout={handleLogout}
            />
            <ProgressCard />
            <QuickStartGrid />
            <TodayTaskCard />

            {error && 
                <Modal
                    message="로그아웃에 실패했습니다."
                    onClose={() => setError(false)}
                />    
            }
        </div>
    );
}