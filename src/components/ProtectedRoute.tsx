import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../FirebaseSDK";

type Props = {
    children: ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
    const user = auth.currentUser;

    if (!user) {
        return <Navigate to="/sign-in" replace />;
    }

    return <>{children}</>;
}