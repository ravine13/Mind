import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { User, Mail, Phone, Calendar, Search } from "lucide-react"

export default function UsersPage() {
  const users = [
    {
      id: 1,
      name: "Sarah Wilson",
      email: "sarah.wilson@email.com",
      phone: "(555) 123-4567",
      joinDate: "2024-01-10",
      lastSession: "2024-01-14",
      status: "active",
      totalSessions: 3,
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "m.chen@email.com",
      phone: "(555) 234-5678",
      joinDate: "2023-12-15",
      lastSession: "2024-01-12",
      status: "active",
      totalSessions: 8,
    },
    {
      id: 3,
      name: "Emma Davis",
      email: "emma.davis@email.com",
      phone: "(555) 345-6789",
      joinDate: "2023-11-20",
      lastSession: "2024-01-08",
      status: "active",
      totalSessions: 12,
    },
    {
      id: 4,
      name: "James Rodriguez",
      email: "j.rodriguez@email.com",
      phone: "(555) 456-7890",
      joinDate: "2024-01-05",
      lastSession: "Never",
      status: "new",
      totalSessions: 0,
    },
    {
      id: 5,
      name: "Lisa Thompson",
      email: "lisa.t@email.com",
      phone: "(555) 567-8901",
      joinDate: "2023-10-12",
      lastSession: "2023-12-20",
      status: "inactive",
      totalSessions: 5,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "new":
        return "bg-blue-100 text-blue-800"
      case "inactive":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div className="flex items-center space-x-2">
          <SidebarTrigger />
          <h2 className="text-3xl font-bold tracking-tight">Users</h2>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search users..." className="pl-8" />
        </div>
        <Button variant="outline">Filter</Button>
      </div>

      <div className="grid gap-4">
        {users.map((user) => (
          <Card key={user.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <User className="h-5 w-5 text-blue-600" />
                    <CardTitle className="text-lg">{user.name}</CardTitle>
                  </div>
                  <Badge className={getStatusColor(user.status)}>{user.status}</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    View Profile
                  </Button>
                  <Button variant="outline" size="sm">
                    Message
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-3">
                  <h4 className="text-sm font-medium">Contact Information</h4>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{user.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{user.phone}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-medium">Account Details</h4>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Joined: {user.joinDate}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Last Session: {user.lastSession}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-medium">Session History</h4>
                  <div className="text-2xl font-bold text-blue-600">{user.totalSessions}</div>
                  <p className="text-sm text-muted-foreground">Total Sessions</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
