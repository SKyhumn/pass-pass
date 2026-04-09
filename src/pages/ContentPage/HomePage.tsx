import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth, db } from "../../FirebaseSDK";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

import type { User } from "firebase/auth";
import type { ScheduleItem } from "../../types/ScheduleItem";

import WelcomeCard from "../../components/Home/WelcomeCard";
import ProgressCard from "../../components/Home/ProgressCard";
import QuickStartGrid from "../../components/Home/QuickStartGrid";
import TodayTaskCard from "../../components/Home/TodayTaskCard";

import Modal from "../../components/Modals/Modal";

export default function MainPage() {
    const [user, setUser] = useState<User | null>(null);
    const [schedules, setSchedules] = useState<ScheduleItem[]>([]);

    const [error, setError] = useState<boolean>(false);

    const nav = useNavigate();

    useEffect(() => {
        let unsubscribeSchedules: (() => void) | undefined;

        const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
            setUser(user);

            if (!user) {
                setSchedules([]);
                return;
            }

            const q = query(
                collection(db, "users", user.uid, "schedules"),
                orderBy("createdAt", "desc")
            );

            unsubscribeSchedules = onSnapshot(q, (snapshot) => {
                const data: ScheduleItem[] = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...(doc.data() as Omit<ScheduleItem, "id">),
                }));

                setSchedules(data);
            });
        });

        return () => {
            unsubscribeAuth();
            if (unsubscribeSchedules) unsubscribeSchedules();
        };
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
            <ProgressCard schedules={schedules}/>
            <QuickStartGrid />
            <TodayTaskCard schedules={schedules} />

            {error && 
                <Modal
                    message="로그아웃에 실패했습니다."
                    onClose={() => setError(false)}
                />    
            }
        </div>
    );
}