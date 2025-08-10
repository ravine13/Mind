"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, Clock, User } from "lucide-react"

export default function BookSessionPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState("")
  const [sessionType, setSessionType] = useState("")
  const [notes, setNotes] = useState("")

  const availableTimes = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"]

  const sessionTypes = [
    "Initial Consultation",
    "Therapy Session",
    "Follow-up Session",
    "Crisis Support",
    "Group Therapy",
  ]

  const handleBooking = () => {
    if (!date || !selectedTime || !sessionType) {
      alert("Please fill in all required fields")
      return
    }

    alert("Session booked successfully! You will receive a confirmation email shortly.")
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center space-x-2">
        <SidebarTrigger />
        <h2 className="text-3xl font-bold tracking-tight">Book a Session</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CalendarIcon className="mr-2 h-5 w-5" />
              Select Date & Time
            </CardTitle>
            <CardDescription>Choose your preferred date and time for the session</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Select Date</Label>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                className="rounded-md border"
              />
            </div>

            <div>
              <Label>Available Times</Label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {availableTimes.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTime(time)}
                    className={selectedTime === time ? "bg-blue-600 hover:bg-blue-700" : ""}
                  >
                    <Clock className="mr-1 h-3 w-3" />
                    {time}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="mr-2 h-5 w-5" />
              Session Details
            </CardTitle>
            <CardDescription>Provide additional information about your session</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="sessionType">Session Type</Label>
              <Select value={sessionType} onValueChange={setSessionType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select session type" />
                </SelectTrigger>
                <SelectContent>
                  {sessionTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="notes">Additional Notes (Optional)</Label>
              <Textarea
                id="notes"
                placeholder="Any specific topics you'd like to discuss or concerns you have..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
              />
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Session Summary</h4>
              <div className="space-y-1 text-sm text-blue-800">
                <p>
                  <strong>Date:</strong> {date ? date.toDateString() : "Not selected"}
                </p>
                <p>
                  <strong>Time:</strong> {selectedTime || "Not selected"}
                </p>
                <p>
                  <strong>Type:</strong> {sessionType || "Not selected"}
                </p>
                <p>
                  <strong>Duration:</strong> 50 minutes
                </p>
                <p>
                  <strong>Provider:</strong> Dr. Sarah Johnson
                </p>
              </div>
            </div>

            <Button
              onClick={handleBooking}
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={!date || !selectedTime || !sessionType}
            >
              Book Session
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Important Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">Before Your Session</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Find a quiet, private space</li>
                <li>• Test your internet connection</li>
                <li>• Prepare any questions or topics</li>
                <li>• Have water nearby</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Cancellation Policy</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• 24-hour notice required</li>
                <li>• Emergency cancellations accepted</li>
                <li>• Reschedule options available</li>
                <li>• Contact us for assistance</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
