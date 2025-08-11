"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Calendar, BookOpen, MessageSquare, TrendingUp, Heart } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react";

export default function UserDashboard() {
  const [name, setName] = useState("User")

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      try {
        const userObj = JSON.parse(storedUser)
        if (userObj.username) {
          setName(userObj.username)
        }
      } catch (err) {
        console.error("Error parsing stored user:", err)
      }
    }
  }, [])

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div className="flex items-center space-x-2">
          <SidebarTrigger />
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Welcome back, {name}!</h2>
            <p className="text-muted-foreground">Here's your wellness overview</p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Session</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Jan 16</div>
            <p className="text-xs text-muted-foreground">10:00 AM with Dr. Johnson</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">+1 this week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Journal Entries</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">3 this week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Mood Score</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7.2</div>
            <p className="text-xs text-muted-foreground">+0.5 from last week</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>What would you like to do today?</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <Link href="/dashboard/user/book">
                <Card className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardContent className="flex items-center space-x-4 p-6">
                    <Calendar className="h-8 w-8 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Book a Session</h3>
                      <p className="text-sm text-muted-foreground">Schedule your next appointment</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/dashboard/user/journal">
                <Card className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardContent className="flex items-center space-x-4 p-6">
                    <BookOpen className="h-8 w-8 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Write in Journal</h3>
                      <p className="text-sm text-muted-foreground">Record your thoughts and feelings</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/dashboard/user/messages">
                <Card className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardContent className="flex items-center space-x-4 p-6">
                    <MessageSquare className="h-8 w-8 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Message Dr. Johnson</h3>
                      <p className="text-sm text-muted-foreground">Send a secure message</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/dashboard/user/history">
                <Card className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardContent className="flex items-center space-x-4 p-6">
                    <TrendingUp className="h-8 w-8 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">View Progress</h3>
                      <p className="text-sm text-muted-foreground">Track your wellness journey</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Upcoming Sessions</CardTitle>
            <CardDescription>Your scheduled appointments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-lg bg-blue-50 border-blue-200">
                <div>
                  <p className="font-medium">Therapy Session</p>
                  <p className="text-sm text-muted-foreground">with Dr. Johnson</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">Jan 16, 10:00 AM</p>
                  <p className="text-xs text-muted-foreground">Tomorrow</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">Follow-up Session</p>
                  <p className="text-sm text-muted-foreground">with Dr. Johnson</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">Jan 23, 2:00 PM</p>
                  <p className="text-xs text-muted-foreground">Next week</p>
                </div>
              </div>

              <Button variant="outline" className="w-full bg-transparent">
                <Calendar className="mr-2 h-4 w-4" />
                View All Sessions
              </Button>
            </div>
          </CardContent>F
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Journal Entries</CardTitle>
          <CardDescription>Your latest thoughts and reflections</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                date: "Jan 14, 2024",
                title: "Feeling more confident",
                preview: "Today I practiced the breathing exercises we discussed...",
              },
              {
                date: "Jan 12, 2024",
                title: "Challenging day at work",
                preview: "Work was stressful but I used the coping strategies...",
              },
              {
                date: "Jan 10, 2024",
                title: "Weekend reflection",
                preview: "Spent time with family and felt more connected...",
              },
            ].map((entry, index) => (
              <div key={index} className="p-3 border rounded-lg hover:bg-slate-50 cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">{entry.title}</h4>
                  <span className="text-xs text-muted-foreground">{entry.date}</span>
                </div>
                <p className="text-sm text-muted-foreground">{entry.preview}</p>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Link href="/dashboard/user/journal">
              <Button variant="outline" className="w-full bg-transparent">
                <BookOpen className="mr-2 h-4 w-4" />
                View All Entries
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
