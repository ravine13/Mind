"use client"
import { useEffect, useState } from "react"

export default function AdminMessagesPage() {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        fetch("https://mind-matters-mn7b.onrender.com/contact-form-submissions", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(res => res.json())
            .then(data => setMessages(data))
    }, [])

    // @ts-ignore
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Messages</h1>
            <div className="grid gap-4">
                {messages.map(msg => (
                    <div key={msg.id} className="p-4 border rounded-lg">
                        <h2 className="font-semibold">{msg.name}</h2>
                        <p className="text-sm text-gray-600">{msg.email}</p>
                        <p className="mt-2">{msg.message}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
