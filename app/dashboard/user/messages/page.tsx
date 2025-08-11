"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function MessagePage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            try {
                const userObj = JSON.parse(storedUser);
                if (userObj.username) setName(userObj.username);
                if (userObj.email) setEmail(userObj.email);
            } catch (err) {
                console.error("Error parsing stored user:", err);
            }
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch("https://mind-matters-mn7b.onrender.com/contact-form-submissions", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message }),
        });

        if (res.ok) {
            alert("Message sent successfully!");
            setMessage("");
        } else {
            alert("Failed to send message");
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Message Dr. Johnson</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border p-2 w-full"
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 w-full"
                    required
                />
                <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="border p-2 w-full"
                    rows={4}
                    required
                />
                <Button type="submit" className="w-full">
                    Send Message
                </Button>
            </form>
        </div>
    );
}
