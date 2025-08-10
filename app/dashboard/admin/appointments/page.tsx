import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, Phone, Mail } from "lucide-react"

export default function AppointmentsPage() {
  const appointments = [
    {
      id: 1,
      patient: "Sarah Wilson",
      email: "sarah.wilson@email.com",
      phone: "(555) 123-4567",
      date: "2024-01-15",
      time: "10:00 AM",
      type: "Initial Consultation",
      status: "confirmed",
      notes: "First-time patient, anxiety concerns",
    },
    {
      id: 2,
      patient: "Michael Chen",
      email: "m.chen@email.com",
      phone: "(555) 234-5678",
      date: "2024-01-15",
      time: "2:00 PM",
      type: "Follow-up",
      status: "confirmed",
      notes: "Progress check on CBT techniques",
    },
    {
      id: 3,
      patient: "Emma Davis",
      email: "emma.davis@email.com",
      phone: "(555) 345-6789",
      date: "2024-01-16",
      time: "9:00 AM",
      type: "Therapy Session",
      status: "pending",
      notes: "Weekly therapy session",
    },
    {
      id: 4,
      patient: "James Rodriguez",
      email: "j.rodriguez@email.com",
      phone: "(555) 456-7890",
      date: "2024-01-16",
      time: "11:30 AM",
      type: "Assessment",
      status: "confirmed",
      notes: "Mental health assessment",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div className="flex items-center space-x-2">
          <SidebarTrigger />
          <h2 className="text-3xl font-bold tracking-tight">Appointments</h2>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Calendar className="mr-2 h-4 w-4" />
          Schedule New
        </Button>
      </div>

      <div className="grid gap-4">
        {appointments.map((appointment) => (
          <Card key={appointment.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <User className="h-5 w-5 text-blue-600" />
                    <CardTitle className="text-lg">{appointment.patient}</CardTitle>
                  </div>
                  <Badge className={getStatusColor(appointment.status)}>{appointment.status}</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    Reschedule
                  </Button>
                  <Button variant="outline" size="sm">
                    Cancel
                  </Button>
                </div>
              </div>
              <CardDescription>{appointment.type}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{appointment.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{appointment.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{appointment.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{appointment.phone}</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Notes:</h4>
                  <p className="text-sm text-muted-foreground">{appointment.notes}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
