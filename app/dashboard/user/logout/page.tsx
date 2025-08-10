"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function LogoutButton() {
    const router = useRouter();

    const handleLogout = async () => {
        const token = localStorage.getItem("token");

        if (!token) {
            localStorage.removeItem("token");
            router.push("/login");
            return;
        }

        try {
            const res = await fetch("https://mind-matters-mn7b.onrender.com/logout", {
                method: "GET", // Backend expects GET for logout
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!res.ok) {
                console.error("Logout request failed", await res.text());
            }

            localStorage.removeItem("token");
            router.push("/login");
        } catch (error) {
            console.error("Logout error:", error);
            localStorage.removeItem("token");
            router.push("/login");
        }
    };

    return (
        <Button
            onClick={handleLogout}
            variant="outline"
            className="text-red-600 border-red-600 hover:bg-red-50"
        >
            Logout
        </Button>
    );
}
