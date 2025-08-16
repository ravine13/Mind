"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { User, Mail, Phone, Calendar, Search } from "lucide-react"

interface Appointment {
  id: number
  appointment_date: string
  appointment_time: string
  client: {
    username: string
    email: string
    phone?: string
  }
}

export default function UsersPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchAppointments() {
      try {
        const token = localStorage.getItem("token")
        if (!token) {
          console.error("No token found. Please log in.")
          return
        }

        const res = await fetch("https://mind-matters-mn7b.onrender.com/appointments", {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        })

        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)

        const data = await res.json()
        setAppointments(data)
      } catch (err) {
        console.error("Failed to fetch appointments:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchAppointments()
  }, [])

  if (loading) {
    return <div className="p-4">Loading appointments...</div>
  }

  return (
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <div className="flex items-center space-x-2">
            <SidebarTrigger />
            <h2 className="text-3xl font-bold tracking-tight">Appointments</h2>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search appointments..." className="pl-8" />
          </div>
          <Button variant="outline">Filter</Button>
        </div>

        <div className="grid gap-4">
          {appointments.map((appt) => (
              <Card key={appt.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <User className="h-5 w-5 text-blue-600" />
                        <CardTitle className="text-lg">{appt.client?.username || "Unknown Client"}</CardTitle>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Scheduled</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium">Contact Information</h4>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{appt.client?.email}</span>
                      </div>
                      {appt.client?.phone && (
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{appt.client.phone}</span>
                          </div>
                      )}
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium">Appointment Details</h4>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Date: {appt.appointment_date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Time: {appt.appointment_time}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
          ))}
        </div>
      </div>
  )
}
