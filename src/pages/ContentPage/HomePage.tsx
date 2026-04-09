import { useEffect, useState } from "react";
import { auth } from "../../FirebaseSDK";
import { onAuthStateChanged } from "firebase/auth";

import type { User } from "firebase/auth";

export default function MainPage() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    return(
        <div className="min-h-screen py-20 px-4 bg-linear-to-b from-[#b9e0fd] to-white">
            
        </div>
    )
}